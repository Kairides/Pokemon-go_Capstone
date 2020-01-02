import { Component, OnInit, Input } from '@angular/core';
import { DrawerComponent } from './drawer/drawer.component';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {
  // @Input() sideNav: DrawerComponent;
  constructor() { }

  ngOnInit() {
  }

}
