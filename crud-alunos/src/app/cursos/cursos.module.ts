import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos.routing.module';
import {CursoDetalheComponent } from './detalhe/detalhe.component';
import {TabelaTestComponent } from './tabela-test/tabela-test.component';

import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { SharedModule } from '../shared/shared.module';
import { CursosFormularioComponent } from './cursos-formulario/cursos-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosManagerComponent } from './cursos-manager/cursos-manager.component';
import { Cursos2Component } from './cursos2/cursos2.component';



@NgModule({
  declarations: [CursoDetalheComponent,TabelaTestComponent,CursosFormularioComponent,CursosManagerComponent,Cursos2Component],
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
