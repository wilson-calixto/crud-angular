import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenericCrudService } from '../shared/services/generic-crud.service';

@Injectable({
  providedIn: 'root'
})

export class CursosService extends GenericCrudService{
  
  API_URL=`${environment.API_URL+':'+environment.API_PORT}/cursos`
  constructor(protected http: HttpClient) {
    super(http);
  }
}
