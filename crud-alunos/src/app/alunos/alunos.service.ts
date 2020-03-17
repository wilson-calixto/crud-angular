import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take, tap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  API_URL = 'http://localhost:3000/alunos'
  constructor(private http: HttpClient) { }

  alunos = [

  ]

  getAlunos() {
    // return this.alunos;
    // return this.http.get(`${this.API_URL}`).pipe(take(1));

    return this.list();
  }

  list(parametrosDaBusca = null) {

    if (parametrosDaBusca === null) {
      return this.http.get<any[]>(this.API_URL)
        .pipe(
          delay(2000),
          tap(console.log)
        );
    }
    console.log(parametrosDaBusca)
    return this.http.get<any[]>(this.API_URL, parametrosDaBusca)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }
  salvarAluno(aluno) {
    console.log('salvarAluno', aluno)
    if (aluno._id == '') {
      return this.criarAluno(aluno)
    }

    return this.editarAluno(aluno);
  }

  criarAluno(aluno) {
    return this.http.post(`${this.API_URL}`, aluno).pipe(take(1));
  }

  editarAluno(aluno) {
    return this.http.put(`${this.API_URL}/${aluno._id}`, aluno).pipe(take(1));
  }

  delete(aluno) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: [aluno],
    };
    // return this.http.delete(`${this.API_URL}/${aluno._id}`).pipe(take(1));
    return this.http.delete(`${this.API_URL}/`, options)

  }


}
