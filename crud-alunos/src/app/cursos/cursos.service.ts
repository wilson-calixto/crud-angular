import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenericCrudService } from '../shared/services/generic-crud.service';


import { take, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CursosService extends GenericCrudService{
  constructor(protected http: HttpClient) {
    super(http);
    super.setURL(`${environment.API_URL+':'+environment.API_PORT}/brands`)

  }


}
