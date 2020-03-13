import { Injectable } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { EventEmitter } from 'events';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioLogouEmitter = new EventEmitter();
  constructor() { }
  usuarioAutenticado:boolean=false;
  funcionalidadesAcessiveis:any[]

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  private getfuncionalidadesAcessiveisAoUsuario(){
    return of({
      usuario:'abc',
      funcionalidades:['CRIAR_aALUNO','VISUALIZAR_ALUNO','EDITAR_ALUNO']//'DELETAR_ALUNO'
    })
  }

  temAcessoAFuncionalidade(funcionalidade){

    let resp=false
    this.funcionalidadesAcessiveis.filter(function(elememt) {
      if(elememt===funcionalidade){
        resp=true
      }      
    });

    console.log('temAcessoAFuncionalidade',funcionalidade,resp)
    return resp
  }

  fazerLogin(usuario:Usuario){
    //fazer a chamada pro back
    if(usuario.nome==='wilson.calixto'){
      this.usuarioAutenticado=true
      this.usuarioLogouEmitter.emit(null);
      console.log("login")
    
      this.getfuncionalidadesAcessiveisAoUsuario().subscribe(
        success => {
          this.funcionalidadesAcessiveis = success.funcionalidades;
          console.log('success no login',(success))

        },
        error => {
          console.log('error no login',(error))
        }
      )
      


      return of({
        'usuarioAutenticado':this.usuarioAutenticado
      })
      
    } 
  }
}
