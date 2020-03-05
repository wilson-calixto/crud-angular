import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
    // ca?nActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard]
    // canLoad: [AuthGuard]
  },
  { path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
