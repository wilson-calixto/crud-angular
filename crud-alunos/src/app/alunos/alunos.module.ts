import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AlunosComponent,AlunoFormularioComponent],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[AlunosService]
})
export class AlunosModule { }
