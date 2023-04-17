import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './auth/components/login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: '', component: HomeComponent, canActivate: [AuthGuard]},
	{path: '**', redirectTo: ''}
	//{path: 'dashboard', component:}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
