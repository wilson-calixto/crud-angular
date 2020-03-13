import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';



@NgModule({
  declarations: [CadastroComponent, LoginComponent, RecuperarSenhaComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CustomMaterialModule,
    FormsModule
    
  ],
  exports: [
    CadastroComponent, LoginComponent, RecuperarSenhaComponent
  ],
  
})
export class AuthModule { }
