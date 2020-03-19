
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosNovoComponent } from './alunos-novo/alunos-novo.component';

const alunosRoutes = [
    {path: '', component: AlunosNovoComponent, 
     canActivateChild: [AlunosGuard],
     children : [
        {path: 'novo', component: AlunosNovoComponent}//,
        // {path: ':id', component: AlunoDetalheComponent,
        //     resolve: { aluno : AlunoDetalheResolver }
        // },
        // {path: ':id/editar', component: AlunoFormComponent,
        //     canDeactivate: [AlunosDeactivateGuard]
        // }
    ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosNovoRoutingModule {}