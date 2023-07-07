import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CheckoutModule} from './components/checkout/checkout.module';
import {HomeModule} from './components/home/home.module';
import {LoginModule} from './components/login/login.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
    SharedModule,
    CoreModule,
    HomeModule,
    LoginModule,
    CheckoutModule
	],
	providers: [
    {
      provide: ErrorHandler,
    }],
	bootstrap: [AppComponent]
})

export class AppModule {}
