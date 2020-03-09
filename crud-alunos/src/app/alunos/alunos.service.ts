import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, tap, delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  API_URL='http://localhost:3000/alunos'
  constructor(private http: HttpClient) { }

  alunos=[

  ]


  list() {
    return this.http.get<any[]>(this.API_URL)
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
    return this.http.post(`${this.API_URL}`,aluno).pipe(take(1));
  }

  editarAluno(aluno){
    return this.http.put(`${this.API_URL}/${aluno.id}`,aluno).pipe(take(1));
  }

  delete(aluno){
    return this.http.delete(`${this.API_URL}/${aluno.id}`).pipe(take(1));
  }
}
