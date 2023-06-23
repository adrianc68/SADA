import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LocalstorageService} from 'src/app/core/localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {
  private isSidebarCollapsed = new BehaviorSubject<boolean>(false);
  private localStorageKey = 'sidebarState';

  isSidebarCollapsed$ = this.isSidebarCollapsed.asObservable();

  constructor(private localStorage: LocalstorageService) {
    const storedSidebarState = localStorage.get(this.localStorageKey);
    if(storedSidebarState) {
      this.isSidebarCollapsed.next(JSON.parse(storedSidebarState));
    }
  }

  public toggleSidebar() {
    this.isSidebarCollapsed.next(!this.isSidebarCollapsed.value);
    this.localStorage.set(this.localStorageKey, JSON.stringify(this.isSidebarCollapsed.value))
  }
}
