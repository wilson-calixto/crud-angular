import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { AlertModalService } from '../shared/alert-modal.service';
import { take, switchMap, catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],

})
export class AlunosComponent implements OnInit {

  constructor(
    private alunosService : AlunosService,
    private alertModalService : AlertModalService,
    private authService : AuthService,
    
    ) { }
  
  
  readonly FIELDS = 'nome,turma';

  queryField = new FormControl();
  lista_de_alunos$: Observable<any[]>;

  ngOnInit(): void {
    // this.carregarAlunos();
    this.atualizaATabela();
  }

  montaFiltrosDeBusca(queryField){
    return {
      params: {
        search: queryField,
        fields: this.FIELDS
      }
    }
  }

  pesquisar(){
    const filtrosDaBusca = this.montaFiltrosDeBusca(this.queryField.value)
    this.atualizaATabela(filtrosDaBusca);
  }


  atualizaATabela(filtrosDaBusca=null) {
    if(filtrosDaBusca===null){
      filtrosDaBusca = this.montaFiltrosDeBusca('')
    }

    this.lista_de_alunos$ = this.alunosService.list(filtrosDaBusca).pipe(
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
            this.atualizaATabela();
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

  mostraFuncionalidade(funcionalidade){
    return this.authService.temAcessoAFuncionalidade(funcionalidade)
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
        this.atualizaATabela();
        this.alertModalService.showAlertSuccess('Operação realizada com sucesso'); 

      },
      error => {
        this.alertModalService.showAlertDanger('Erro ao realizar operação. Por favor tente novamente mais tarde.'+(error));
      }
    )
  }

}
