import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/services/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Verificar se o token JWT está presente
    const currentUser = this.loginService.currentUserValue;
    if (currentUser && currentUser.token) {
      return true; // Permitir a navegação se o token estiver presente
    }

    // Redirecionar para a página de login se o token não estiver presente
    return this.router.createUrlTree(['/login']);
  }
}
