import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {
  constructor(
    private authService : AuthService,
    private router : Router
    ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      
      return this.verificaLogin();
  }

  canLoad(route: Route): boolean {  
    return this.verificaLogin();
  }

  private verificaLogin(){
    if(this.authService.usuarioEstaAutenticado()){
      console.log('this.authService.usuarioEstaAutenticado()',this.authService.usuarioEstaAutenticado())
      return true
    }
    console.log('this.authService.usuarioEstaAutenticado()',this.authService.usuarioEstaAutenticado())
    this.router.navigate(['/login'])
    return false
  }
}
