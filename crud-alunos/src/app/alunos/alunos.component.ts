import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { AlertModalService } from '../shared/alert-modal.service';
import { Title } from '@angular/platform-browser';
import { take, switchMap, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],

})
export class AlunosComponent implements OnInit {

  constructor(
    private alunosService : AlunosService,
    private alertModalService : AlertModalService) { }

  lista_de_alunos$: Observable<any[]>;

  ngOnInit(): void {
    // this.carregarAlunos();
    this.onRefresh();
  }


  // carregarAlunos(){
  //   this.lista_de_alunos$ =this.alunosService.getAlunos();
  // }

  onRefresh() {
    this.lista_de_alunos$ = this.alunosService.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    );
  }
  handleError(){
    console.log("error")
  }

  deletarAluno(aluno){

    const result$=this.alertModalService.showConfirm('teste','Tem certeza que deseja excluir?','sim','não');
    result$.asObservable()
    .pipe(
        take(1),
        switchMap(result => result ? this.alunosService.delete(aluno) : EMPTY)
      )
      .subscribe(
          success => {
            this.onRefresh();
            this.alertModalService.showAlertSuccess('Operação realizada com sucesso'); 

          },
          error => {
            this.alertModalService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
          }
        )
     
    }
  
 
 
  editarAluno(aluno){
    this.exibeModal(aluno)    
  }
  
  criarAluno(){
    this.exibeModal(null)
  }

  exibeModal(aluno){
    console.log('aluno',aluno)
    const result$=this.alertModalService.openEditModal(aluno);
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result.ehvalido ? this.alunosService.salvarAluno(result.form.value) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
        this.alertModalService.showAlertSuccess('Operação realizada com sucesso'); 

      },
      error => {
        this.alertModalService.showAlertDanger('Erro ao realizar operação. Por favor tente novamente mais tarde.'+(error));
      }
    )
  }

}
