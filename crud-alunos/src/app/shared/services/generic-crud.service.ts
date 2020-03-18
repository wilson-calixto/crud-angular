import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take, tap, delay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GenericCrudService {

  API_URL
  constructor(protected http: HttpClient) {}
  
  protected setURL(url){
    this.API_URL=url
  }
  getElementos() {
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
  salvar(element) {
    if (element._id == '') {
      return this.criarElemento(element)
    }

    return this.editarElemento(element);
  }

  criarElemento(element) {
    return this.http.post(`${this.API_URL}`, element).pipe(take(1));
  }

  editarElemento(element) {
    return this.http.put(`${this.API_URL}/${element._id}`, element).pipe(take(1));
  }

  delete(element) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: [element],
    };
    return this.http.delete(`${this.API_URL}/`, options)

  }


}
