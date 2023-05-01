import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.checkAuth()) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }

  private checkAuth(): boolean {
    return this.authService.IsLogged();
  }
}
