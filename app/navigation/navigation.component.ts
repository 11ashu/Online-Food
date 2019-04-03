import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
  <!-- Sidebar -->
  <div class="bg-light border-right" id="sidebar-wrapper">
    <div class="sidebar-heading"><strong class="text-success">Food Ordering App</strong></div>
    <div class="list-group list-group-flush">
      <a href="#" routerLink="/dashboard" class="list-group-item list-group-item-action bg-light">Dashboard</a>
      <a href="#" routerLink="/profile" class="list-group-item list-group-item-action bg-light">Admin Settings</a>
      <a href="#" routerLink="/appsetting" class="list-group-item list-group-item-action bg-light">Main Settings</a>
      <a href="#" routerLink="/editresdetails" class="list-group-item list-group-item-action bg-light">Restaurant Details</a>
      <a href="#" routerLink="/category" class="list-group-item list-group-item-action bg-light">Categories</a>
      <a href="#" routerLink="/menuitem" class="list-group-item list-group-item-action bg-light">Menu Item</a>
      <a href="#" routerLink="/orderlist" class="list-group-item list-group-item-action bg-light">Order List</a>
      <a href="#" routerLink="/emailusers" class="list-group-item list-group-item-action bg-light">Manage Users</a>
      <a href="#" routerLink="/policy" class="list-group-item list-group-item-action bg-light">Terms & Conditions</a>
      <a href="#" routerLink="/faq" class="list-group-item list-group-item-action bg-light">FAQ</a>
    </div>
  </div>
  <!-- /#sidebar-wrapper -->
  
  `,
  styles: []
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
