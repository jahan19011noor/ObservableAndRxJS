import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { nextContext } from '@angular/core/src/render3';
import { GeolocationService } from './geolocation.service';

@Component({
  selector: 'app-geolocation-updates',
  template: `
    <h2>Geolocation Updates</h2>
    <p>Current Position: <strong>latitude: {{latitude}}, longitude: {{longitude}}</strong></p>
    <p>Geolocation Error: 
      <strong *ngIf="error">{{error}}</strong>
      <strong *ngIf="!error">No Error</strong>
    </p>
  `,
  styleUrls: ['./geolocation-updates.component.css']
})
export class GeolocationUpdatesComponent implements OnInit {

  latitude: any;
  longitude: any;

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    this.geolocationService.getLocation().subscribe(rep => {
      this.latitude = rep.coords.latitude
      this.longitude = rep.coords.longitude
   });
    
  }
}
