import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LoginResponse} from 'src/app/shared/models/loginResponse';
import {AUTH_API} from '../httpservice/constants';
import {HttpService} from '../httpservice/http.service';
import {LocalstorageService} from '../localstorage/localstorage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginResponse: LoginResponse = {
    accessToken: '',
    refreshToken: ''
  }

  constructor(
    private httpService: HttpService,
    private localstorageService: LocalstorageService,
    private router: Router
  ) {}

  public login(email: string, password: string): void {
    const body = {email, password};
    // let datax = this.httpService.post(`${AUTH_API}`, body).subscribe((data) => {
    //   console.log("llllllllllllll");
    //   console.log(data);
    //   console.log("llllllllllllll");
    //   const response: LoginResponse = {
    //     accessToken: data.message.accesstoken,
    //     refreshToken: data.message.refreshToken,
    //   }
    //   this.localstorageService.set("accessToken", response.accessToken);
    //   this.localstorageService.set("refreshToken", response.refreshToken);
    //   ,
    //   (error) => {
    //     console.log(error);
    //   }
    // });
    this.httpService.post(`${AUTH_API}`, body).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
        console.log(error.error);
        console.log(error.error.message);
        console.log(error.error.code);
      }
    })



  }
}
