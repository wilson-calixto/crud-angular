import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from 'src/app/shared/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showSpinner=false
  nome=''
  constructor(
    private authService : AuthService,
    private router: Router
    ) { }
  usuario : Usuario = new Usuario()
  ngOnInit(): void {
    this.usuario = new Usuario()
  }
  login(){
    this.authService.fazerLogin(this.usuario).subscribe(
        success => {
          if(success.usuarioAutenticado){
            this.router.navigate(['/alunos'])
          }
        },
        error => {
          console.log('error')

        }
    );

    // .asObservable()
    // .pipe(
    //     take(1),
    //     switchMap(result => result ? this.alunosService.delete(aluno) : EMPTY)
    //   )
    //   .subscribe(
    //     success => {

    //     },
    //     error => {


    //     }
    //   )

    // console.log("login")
  }

}
