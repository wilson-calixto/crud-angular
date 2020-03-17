import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from '../guards/login.guard';



const routes = [
    {path: '', component: LoginComponent,
    canLoad: [LoginGuard]
 
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}