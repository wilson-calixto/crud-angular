import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { take, switchMap, catchError } from 'rxjs/operators';
import { EMPTY, Observable, observable, Subject } from 'rxjs';

import { AlertModalService } from '../../shared/alert-modal.service';
import { GenericCrudService } from '../../shared/services/generic-crud.service';


@Component({
  selector: 'app-base-crud',
  templateUrl: './base-crud.component.html',
  styleUrls: ['./base-crud.component.scss']
})
export abstract class BaseCrudComponent implements OnInit {

  dataSource = new MatTableDataSource<any>()

  selection = new SelectionModel<any>(true, []);

  // @Input() formComponent;
  // @Input() displayedColumns: string[];


  formComponent
  displayedColumns


  constructor(
    protected alertModalService: AlertModalService,
    protected service: GenericCrudService,
  ) {

    this.carregaDados()
    // Assign the data to the data source for the table to render

  }

  async carregaDados() {
    this.dataSource.data = await this.service.list(null).toPromise().then((res: any) => {
      return res;
    }).catch((err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    // this.carregaDados()
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

    result$.afterClosed()
      .pipe(
        take(1),
        switchMap(result => result !== null ? this.service.salvar(result) : EMPTY)
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
