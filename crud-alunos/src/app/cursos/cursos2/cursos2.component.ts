import { Component, OnInit } from '@angular/core';


import { AlertModalService } from '../../shared/alert-modal.service';
import { CursosFormDialogComponent } from '../cursos-form-dialog/cursos-form-dialog.component';
import { BaseCrudComponent } from '../../shared/base-crud/base-crud.component';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-cursos2',
  templateUrl: './cursos2.component.html',
  styleUrls: ['./cursos2.component.scss']
})

//TODO deixar o displayedColumns genérico
export class Cursos2Component extends BaseCrudComponent implements OnInit {
  displayedColumns: string[] = ['select', '_id', 'nome'];
  formComponent=CursosFormDialogComponent

  constructor(
    protected alertModalService: AlertModalService,
    protected service: CursosService
  ) {
      super(alertModalService,service)
  }

  ngOnInit() {

  }
}
