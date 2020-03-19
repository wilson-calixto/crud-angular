import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenericCrudService } from 'src/app/shared/services/generic-crud.service';

@Injectable({
  providedIn: 'root'
})

export class AlunosNovoService extends GenericCrudService{
  
  API_URL=`${environment.API_URL+':'+environment.API_PORT}/alunos`
  constructor(protected http: HttpClient) {
    super(http);
  }
}
