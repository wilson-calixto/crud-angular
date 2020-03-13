
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunoFormularioComponent } from './aluno-formulario/aluno-formulario.component';
import { AlunosGuard } from '../guards/alunos.guard';

const alunosRoutes = [
    {path: '', component: AlunosComponent, 
     canActivateChild: [AlunosGuard],
     children : [
        {path: 'novo', component: AlunoFormularioComponent}//,
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
export class AlunosRoutingModule {}