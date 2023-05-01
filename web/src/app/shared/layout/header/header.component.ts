import { Component } from '@angular/core';
import {AuthService} from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authservice: AuthService) {
  }

  public logout():void {
    this.authservice.logout();
  }

}
