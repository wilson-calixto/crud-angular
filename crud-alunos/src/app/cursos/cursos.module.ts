import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos.routing.module';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SharedModule } from '../shared/shared.module';
import { CursosFormularioComponent } from './cursos-formulario/cursos-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cursos2Component } from './cursos2/cursos2.component';
import { CursosFormDialogComponent } from './cursos-form-dialog/cursos-form-dialog.component';



@NgModule({
  declarations: [CursosFormularioComponent,Cursos2Component,CursosFormDialogComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    CustomMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
