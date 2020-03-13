import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService : AuthService) { }
  title = 'crud-alunos';
  mostrarMenu=true;

  ngOnInit(): void {

    // this.authService.usuarioLogouEmitter.addListener()
      // .subscribe(arg => 
      //   if(arg==='1'){
      //     this.mostrarMenu=true
      //   }else{
      //     this.mostrarMenu=false
      //   }
         
        
      //   );
    
  }
}
