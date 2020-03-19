import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosGuard } from '../guards/cursos.guard';
import { Cursos2Component } from './cursos2/cursos2.component';

const routes = [
    { path: '', component: Cursos2Component },
    {
      path: 'novo',
      component: Cursos2Component,

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}