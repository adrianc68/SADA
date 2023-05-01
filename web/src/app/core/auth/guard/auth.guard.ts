import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard{
	constructor(
    private router: Router,
    private authService: AuthService
  ) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.checkAuth()) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}

  private checkAuth(): boolean {
    return this.authService.IsLogged();
  }

}

