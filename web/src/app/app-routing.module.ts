import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

// import {AuthGuard} from './auth/auth.guard';
// import {LoginComponent} from './auth/components/login/login.component';
// import {EmployeesComponent} from './employees/components/employee/employees.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
  // { path: '', data { layout: Layouts.Full},
  // children: [
  //   { path: 'dashboard', loadchildren: () => }
  // ]
// }



	// {path: 'login', component: LoginComponent},
	// {path: '', component: EmployeesComponent, canActivate: [AuthGuard]},
	// {path: '**', redirectTo: ''}
	//{path: 'dashboard', component:}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
