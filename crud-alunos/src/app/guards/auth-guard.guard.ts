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
      return true
      return this.authService.verificaLogin()
  }

  canLoad(route: Route): Observable<boolean> | boolean {  
    return true
    return this.authService.verificaLogin()
  }

}
