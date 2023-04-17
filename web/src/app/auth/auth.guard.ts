import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard {
	constructor(private router: Router) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (Math.random() > 0) {
			return true;
		} else {
			this.router.navigate(['/login'], {queryParams : { returnUrl : state.url }});
			return false;
		}
	}

}
