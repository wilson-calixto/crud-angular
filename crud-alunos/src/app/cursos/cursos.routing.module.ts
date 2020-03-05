import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosComponent } from './cursos.component';

const routes = [
    {path: '', component: CursosComponent, 
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}