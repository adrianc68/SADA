import {ErrorHandler, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor() {}

  public handleError(error: any, message?: string): void {
    if (message) {
      console.log(message);
    }
    console.error(error);
  }

}
