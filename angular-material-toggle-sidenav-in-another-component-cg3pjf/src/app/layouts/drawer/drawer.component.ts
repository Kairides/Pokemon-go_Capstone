import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideNavService } from '../side-nav.service';
import { getTreeControlMissingError } from '@angular/cdk/tree';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  // providers: [SideNavService]
})
export class DrawerComponent implements AfterViewInit {
  @ViewChild("mapContainer") gmap:ElementRef;
  @ViewChild('sidenav') public sidenav: MatSidenav;

  icons = {
    trainer: {
      icon:
        "https://cdn.discordapp.com/attachments/627178681428606989/638045396282769431/trainer_v3.png"
    },

    self: {
      // TODO: faire nos propres icones
      icon:
        "https://cdn.discordapp.com/attachments/627178681428606989/638326088573124618/trainer_v4.png"
    },

    pokemon: {
      icon:
        "https://cdn.discordapp.com/attachments/627178681428606989/637666290563284995/pokeball_v1.png"
    }
  };

  map: google.maps.Map;
  currentLat = 0;
  currentLong = 0;
  isTracking;
  marker;

  coordinates = new google.maps.LatLng(this.currentLat, this.currentLong);
  constructor(private sideNavService: SideNavService) { 
  }

  mapInitializer(){
    this.map = new google.maps.Map(this.gmap.nativeElement);
  }

  ngAfterViewInit(){
    this.mapInitializer();
  }

  ngOnInit() { 
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
  } 
}
