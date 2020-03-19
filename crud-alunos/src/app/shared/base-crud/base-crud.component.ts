import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { take, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { AlertModalService } from '../../shared/alert-modal.service';
import { GenericCrudService } from '../../shared/services/generic-crud.service';
import { BaseFormComponent } from '../base-form/base-form.component';
import { CursosFormularioComponent } from 'src/app/cursos/cursos-formulario/cursos-formulario.component';


/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
@Component({
  selector: 'app-base-crud',
  templateUrl: './base-crud.component.html',
  styleUrls: ['./base-crud.component.scss']
})
export abstract class BaseCrudComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  // @Input() formComponent;
  // @Input() displayedColumns: string[];

 
  formComponent
  displayedColumns

  constructor(
    protected alertModalService: AlertModalService,
    protected service: GenericCrudService,
  ) {
    
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {

  }

  refreshSelection(event) {
    this.selection = event
  }

  editar() {
    this.exibeModal(this.selection.selected[0])
  }

  criar() {
    this.exibeModal(null)
  }

  exibeModal(element) {
    console.log('typeof(this.service)',typeof(this.service))
    const result$ = this.alertModalService.openGenericEditModal(element, this.formComponent);
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result['ehvalido'] ? this.service.salvar(result['form'].value) : EMPTY)
      )
      .subscribe(
        success => {
          // this.atualizaATabela();
          this.alertModalService.showAlertSuccess('Operação realizada com sucesso');

        },
        error => {
          this.alertModalService.showAlertDanger('Erro ao realizar operação. Por favor tente novamente mais tarde.' + (error));
        }
      )
  }

}


/** Builds and returns a new User. */
function createNewUser(id: number): any {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}
