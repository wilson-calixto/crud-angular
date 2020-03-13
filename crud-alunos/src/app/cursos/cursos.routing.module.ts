import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';
import {CursoDetalheComponent } from './detalhe/detalhe.component';
import { CursosGuard } from '../guards/cursos.guard';

const routes = [
    { path: '', component: CursosComponent },
    {
      path: 'novo',
      component: CursoDetalheComponent,

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}