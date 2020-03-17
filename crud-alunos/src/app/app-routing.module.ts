import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthModule } from './auth/auth.module';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [


  { path: 'cursos',
  loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuardGuard],  
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuardGuard]

  },
  { path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuardGuard],
    // canActivateChild: [AlunosGuard]
    canLoad: [AuthGuardGuard]
  },
  { path :'login',
  loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule),
  canActivate: [AuthGuardGuard]

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
