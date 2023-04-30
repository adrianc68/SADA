import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {map, Observable, tap} from 'rxjs';
import {httpMessageCodes} from 'src/app/shared/models/http-message-codes';
import {LoginResponse} from 'src/app/shared/models/loginResponse';
import {AUTH_API} from '../httpservice/constants';
import {HttpService} from '../httpservice/http.service';
import {LocalstorageService} from '../localstorage/localstorage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokens: LoginResponse = {
    accessToken: '',
    refreshToken: ''
  }

  constructor(
    private httpService: HttpService,
    private localstorageService: LocalstorageService,
    private router: Router
  ) {}

  public login(email: string, password: string): Observable<any> {
    const body = {email, password};
    return this.httpService.post(`${AUTH_API}`, body).pipe(
      tap(result => {
        if (httpMessageCodes.OK.key === result.code) {
          this.tokens = {
            accessToken: result.data.accessToken,
            refreshToken: result.data.refreshToken
          }
          this.saveTokens(this.tokens);
          return result;
        }
      })
    )
  }

  private saveTokens(loginResponse: LoginResponse): void {
    this.localstorageService.set("accessToken", loginResponse.accessToken);
    this.localstorageService.set("refreshToken", loginResponse.refreshToken);
  }
}
