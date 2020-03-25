import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
// import {
//   MatSliderModule
// } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule} from '@angular/material/card';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthModule } from './auth/auth.module';
import { LoginGuard } from './guards/login.guard';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CustomMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,

    ModalModule.forRoot(),
    AuthModule,
    SharedModule,

    CursosModule,


    AlunosModule,
    MatSliderModule,
    
  ],
  providers: [AuthService,AuthGuardGuard,CursosGuard,AlunosGuard,LoginGuard,SharedModule,
    { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
