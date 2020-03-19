import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { take, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { AlertModalService } from '../../shared/alert-modal.service';
import { GenericCrudService } from '../../shared/services/generic-crud.service';


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

    this.service.list(null).subscribe(
      success => {
        console.log('success',success)
        this.dataSource = new MatTableDataSource(success);
      },
      error => {
        console.log('error')

      }
    );

    // Assign the data to the data source for the table to render
   
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
