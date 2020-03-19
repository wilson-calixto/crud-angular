import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosNovoComponent } from './alunos-novo/alunos-novo.component';
import { AlunosNovoRoutingModule } from './alunos-novo.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlunosNovoService } from './services/alunos-novo.service';
import { AlunoNovoFomularioComponent } from './aluno-novo-fomulario/aluno-novo-fomulario.component';
import { SharedModule } from '../shared/shared.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';



@NgModule({
  declarations: [AlunosNovoComponent,AlunoNovoFomularioComponent],
  imports: [
    CommonModule,
    AlunosNovoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    SharedModule,
  ],
  providers:[AlunosNovoService]
})
export class AlunosNovoModule { }
