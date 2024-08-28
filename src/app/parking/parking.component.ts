import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Icon, LeafletMouseEvent, icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'parking-app',
  standalone: true,
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],  // Corrected to styleUrls

  imports: [LeafletModule, RouterLink, CommonModule]
})
export class ParkingComponent {
  options: any = {};
  layers: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: any){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
        this.options = {
              layers: [
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
              ],
              zoom: 14.5,
              center: latLng(35.783578, -5.815904)
            };

        this.layers = [
          marker([35.783578, -5.815904], {
                icon: icon({
                  ...Icon.Default.prototype.options,
                  iconUrl: 'parkicon.png'
                })
              }).on('click', () => { console.log(this) }).bindPopup(`
                <h2> Park Residence Oumaima </h2>
                <p> les places disponbles : 4 <p>
                <button> <a routerlink="/reservation" ng-reflect-router-link="/reservation" href="/reservation"> Reservation </a> </button>
                `)
            ];
    }
  }
 


  clickMap(event: LeafletMouseEvent) {
    console.log(event);
  }
}
