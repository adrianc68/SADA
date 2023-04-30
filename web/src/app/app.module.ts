import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
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
    ComponentsModule
	],
	providers: [
    {
      provide: ErrorHandler,
    }],
	bootstrap: [AppComponent]
})

export class AppModule {}
