import {Component, ErrorHandler, OnInit} from '@angular/core';
import {AuthService} from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService, private ErrorHandler: ErrorHandler) {}

  ngOnInit(): void {
    console.log('Hola mundo');
    const email = "test@hotmail.com";
    const password = "test1234";
    this.authService.login(email, password);
  }
}
