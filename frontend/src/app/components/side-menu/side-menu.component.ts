import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; // Add this import
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatIconModule, MatListModule, RouterModule], // Add MatListModule to imports
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  // Define your menu items here
  menuItems = [
    { name: 'Home', icon: 'home', route: '/home' },
    { name: 'About', icon: 'info', route: '/test' },
    { name: 'Contact', icon: 'mail', route: '/data-display' }
  ];

}
