import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Layouts} from './shared/layout/layouts';
import { HomeModule} from './components/home/home.module';
import {LoginModule} from './components/login/login.module';
import {AuthGuard} from './core/auth/guard/auth.guard';
import {LoginGuard} from './core/auth/guard/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: "login",
    data: { layout: Layouts.Simple},
    canActivate: [LoginGuard],
    loadChildren: () => LoginModule
  },
  {
    path: 'home',
    data: { layout: Layouts.Full},
    loadChildren: () => HomeModule,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
