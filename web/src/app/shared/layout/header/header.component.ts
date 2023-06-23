import {Component} from '@angular/core';
import {AuthService} from 'src/app/core/auth/auth.service';
import {ToggleSidebarService} from '../toggleSidebarService/toggle-sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authservice: AuthService, private toggleSidebarService: ToggleSidebarService) {
  }

  public toggleSidebar() {
    this.toggleSidebarService.toggleSidebar();
  }

  public logout(): void {
    this.authservice.logout();
  }



}
