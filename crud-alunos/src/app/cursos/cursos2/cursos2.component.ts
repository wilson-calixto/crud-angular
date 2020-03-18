import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { UserData } from '../../shared/userData';
import { take, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { AlertModalService } from '../../shared/alert-modal.service';
import { CursosFormularioComponent } from '../cursos-formulario/cursos-formulario.component';


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
  selector: 'app-cursos2',
  templateUrl: './cursos2.component.html',
  styleUrls: ['./cursos2.component.scss']
})

//TODO deixar o displayedColumns genérico
export class Cursos2Component implements OnInit {
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  @Input() service;
  @Input() formComponent;
  @Input() displayedColumns: string[];


  constructor(
    private alertModalService: AlertModalService,
    // private service: CursosService
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
