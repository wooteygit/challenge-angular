import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-ui-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
