import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth/auth.service';
import {LocalstorageService} from './localstorage/localstorage.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpService} from './httpservice/http.service';
import {ErrorHandlerService} from './errorhandling/error-handler.service';
import {TokenInterceptorService} from './auth/interceptor/token-interceptor.service';
import {HttpErrorInterceptorService} from './httpservice/interceptor/http-error-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    AuthService,
    LocalstorageService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    }
  ]
})
export class CoreModule {}
