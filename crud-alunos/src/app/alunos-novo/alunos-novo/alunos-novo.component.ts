import { Component, OnInit } from '@angular/core';
import { BaseCrudComponent } from 'src/app/shared/base-crud/base-crud.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AlunosNovoService } from '../services/alunos-novo.service';
import { AlunosNovoFormDialogComponent } from '../alunos-novo-form-dialog/alunos-novo-form-dialog.component';


@Component({
  selector: 'app-alunos-novo',
  templateUrl: './alunos-novo.component.html',
  styleUrls: ['./alunos-novo.component.scss']
})
export class AlunosNovoComponent extends BaseCrudComponent implements OnInit {
  displayedColumns: string[] = ['select', '_id','nome', 'turma'];
  formComponent=AlunosNovoFormDialogComponent

  constructor(
    protected alertModalService: AlertModalService,
    protected service: AlunosNovoService
  ) {
      super(alertModalService,service)
  }

  ngOnInit() {

  }

  
}