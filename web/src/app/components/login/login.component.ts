import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/core/auth/auth.service';
import {validationFormMessage} from 'src/app/shared/models/formConstats';
import {httpMessageCodes} from 'src/app/shared/models/http-message-codes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMessage: string = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(public authService: AuthService, private router: Router) {}

  public onSubmit(): void {
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      this.errorMessage = validationFormMessage.INCOMPLETE_FORM;
      return;
    }
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    if (email && password) {
      this.login(email.toString(), password.toString());
    }
  }

  private login(email: string, password: string): void {
    this.authService.login(email, password)
      .subscribe({
        next: (result) => {
          if (result.code == httpMessageCodes.OK.key) {
            this.router.navigate(['/home']);
          }
        },
        error: (error) => {
          this.errorMessage = error.error.message;
        }
      });
  }
}
