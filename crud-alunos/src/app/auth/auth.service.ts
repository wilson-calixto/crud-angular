import { Injectable } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { EventEmitter } from 'events';
import { of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioLogouEmitter = new EventEmitter();
  loggedIn: Subject<boolean>;
  pagina_home='/alunos'
  usuarioAutenticado:boolean=false;
  funcionalidadesAcessiveis:any[]

  constructor(
    private http: HttpClient,
    private router : Router

  ) {
    this.loggedIn = new Subject();
    this.getLogin();
    this.funcionalidadesAcessiveis=['CRIAR_ALUNO','VISUALIZAR_ALUNO','EDITAR_ALUNO','DELETAR_ALUNO']
    // this.getfuncionalidadesAcessiveisAoUsuario().subscribe(function(resp) {
    //   this.funcionalidadesAcessiveis=resp
    // })

  }

  usuarioEstaAutenticado(){
    return this.loggedIn;
  }

  private getfuncionalidadesAcessiveisAoUsuario(){
    return of({
      usuario:'abc',
      funcionalidades:['CRIAR_ALUNO','VISUALIZAR_ALUNO','EDITAR_ALUNO']//'DELETAR_ALUNO'
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
       this.http.post(environment.apiUrl + '/login', {
        email: usuario.nome,
        password: usuario.senha
      }, {
        withCredentials: true
      })
      .subscribe((resp: any) => {
        console.log('resp',resp)
        if(resp.user){
          this.loggedIn.next(true);

          this.usuarioAutenticado=true
          console.log('truenavengando')
          this.getfuncionalidadesAcessiveisAoUsuario()
          this.router.navigate([this.pagina_home])
          console.log('truenavengando')

        }
      }, (errorResp) => {
        this.usuarioAutenticado=false 
        this.loggedIn.next(false);

        errorResp.error ? console.log(errorResp.error.errorMessage) : console.log('An unknown error has occured.');
      });


    // return of({
    //   'usuarioAutenticado':this.loggedIn
    // })      
  }



  getLogin() {
    this.http.get(environment.apiUrl + '/login', {
      withCredentials: true // <=========== important!
    }).subscribe((resp: any) => {
      this.loggedIn.next(resp.loggedIn);
      this.usuarioAutenticado=true
      this.usuarioLogouEmitter.emit(null);
    }, (errorResp) => {
      console.log('Oops, something went wrong getting the logged in status')
    })
  }

  async logout() {
    this.http.post(environment.apiUrl + '/logout', {}, {
      withCredentials: true
    }).subscribe((resp: any) => {
      console.log('logout',resp)
      this.usuarioAutenticado=false
      console.log('logout',this.usuarioAutenticado)
      this.loggedIn.next(false);

      this.router.navigate(['/login'])

    });
  }

  verificaLogin(){
    // console.log('verifica login',this.loggedIn)
    // this.loggedIn.subscribe(res =>{
    //   console.log('verifica login',res)

    //   // if(res){
    //   //   this.router.navigate(['/login'])
    //   // }
    // })
    // return this.loggedIn
    this.usuarioAutenticado=true

    console.log('verificaLogin',this.usuarioAutenticado)
    if(!this.usuarioAutenticado){
      console.log('verificaLogin redirecionando')

      this.router.navigate(['/login'])
    }
    

    return this.usuarioAutenticado
  }


  verificaLogout(){
    console.log('verificaLogout',this.usuarioAutenticado)
    if(this.usuarioAutenticado){
      console.log('verificaLogout redirecionando')

      this.router.navigate([this.pagina_home])
    }
    
    return !this.usuarioAutenticado
  }


}
