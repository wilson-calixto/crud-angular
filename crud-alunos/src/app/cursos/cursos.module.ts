import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos.routing.module';
import {CursoDetalheComponent } from './detalhe/detalhe.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';



@NgModule({
  declarations: [CursosComponent,CursoDetalheComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    CustomMaterialModule
  ]
})
export class CursosModule { }
