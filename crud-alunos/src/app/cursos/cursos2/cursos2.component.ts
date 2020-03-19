import { Component, OnInit } from '@angular/core';


import { AlertModalService } from '../../shared/alert-modal.service';
import { CursosFormularioComponent } from '../cursos-formulario/cursos-formulario.component';
import { BaseCrudComponent } from '../../shared/base-crud/base-crud.component';
import { CursosService } from '../cursos.service';


//TODO usar apenas um html pra todos
@Component({
  selector: 'app-cursos2',
  // templateUrl: '../../shared/base-crud/base-crud.component.html',
  templateUrl: './cursos2.component.html',
  styleUrls: ['./cursos2.component.scss']
})

//TODO deixar o displayedColumns genérico
export class Cursos2Component extends BaseCrudComponent implements OnInit {
  displayedColumns: string[] = ['select', '_id', 'nome'];
  formComponent=CursosFormularioComponent

  constructor(
    protected alertModalService: AlertModalService,
    protected service: CursosService
  ) {
      super(alertModalService,service)
  }

  ngOnInit() {

  }
}
