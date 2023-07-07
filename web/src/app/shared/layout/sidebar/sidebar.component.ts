import { Component } from '@angular/core';
import {ToggleSidebarService} from '../toggleSidebarService/toggle-sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isSidebarCollapsed = false;

  constructor(private toggleSidebarService: ToggleSidebarService) {}

  ngOnInit() {
    this.toggleSidebarService.isSidebarCollapsed$.subscribe(collapsed => {
      this.isSidebarCollapsed = collapsed;
    })
  }

}
