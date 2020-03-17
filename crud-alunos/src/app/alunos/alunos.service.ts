import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  API_URL='http://localhost:3000/brand'
  constructor(private http: HttpClient) { }

  alunos=[

  ]


  list(parametrosDaBusca=null) {
    
    if(parametrosDaBusca===null){
      return this.http.get<any[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
      );
    }
    console.log(parametrosDaBusca)
    return this.http.get<any[]>(this.API_URL,parametrosDaBusca)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }
  
  getAlunos(){
    // return this.alunos;
    // return this.http.get(`${this.API_URL}`).pipe(take(1));

    this.list();
  }
  salvarAluno(aluno){
    console.log('salvarAluno',aluno)
    if(aluno.id==''){
      return this.criarAluno(aluno)    
    }
   
    return this.editarAluno(aluno);
  }

  criarAluno(aluno){
    const brand={name:'name'}
    return this.http.post(`${this.API_URL}`,brand).pipe(take(1));
  }

  editarAluno(aluno){
    return this.http.put(`${this.API_URL}/${aluno.id}`,aluno).pipe(take(1));
  }

  delete(aluno){
    return this.http.delete(`${this.API_URL}/${aluno.id}`).pipe(take(1));
  }
}
