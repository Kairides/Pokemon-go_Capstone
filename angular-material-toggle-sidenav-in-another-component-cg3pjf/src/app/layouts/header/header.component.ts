import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [SideNavService]
})
export class HeaderComponent {
  title: string = "Pokemon Go but not quite pokemon go yet";      

  constructor(private sideNavService: SideNavService) {

  }

  clickMenu() { 
    this.sideNavService.toggle();
  }
}
