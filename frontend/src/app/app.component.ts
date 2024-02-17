import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataDisplayComponent, SideMenuComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dashpanel-app';
  isLoggedIn = false;

  constructor() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      // Code to handle when user is logged in
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      // Code to handle when user is not logged in
    }
  }

  
}
