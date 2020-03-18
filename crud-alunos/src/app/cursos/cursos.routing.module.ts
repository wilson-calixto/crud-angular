import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CursoDetalheComponent } from './detalhe/detalhe.component';
import { CursosGuard } from '../guards/cursos.guard';
import { Cursos2Component } from './cursos2/cursos2.component';
import { CursosManagerComponent } from './cursos-manager/cursos-manager.component';

const routes = [
    { path: '', component: CursosManagerComponent },
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