import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService : AuthService) { }
  title = 'crud-alunos';
  mostrarMenu ;

  ngOnInit(): void {

    this.authService.loggedIn.subscribe(loggedIn => {
      this.mostrarMenu = loggedIn;
    });
    
  }
  async logout() {
    // console.log
    await this.authService.logout()
    // this.authService.verificaLogin()

  }
}
