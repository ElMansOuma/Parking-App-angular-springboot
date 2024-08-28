import { Component } from '@angular/core';
import { BookingComponent } from '../components/booking/booking.component';
import { FindVehicleComponent } from '../components/find-vehicle/find-vehicle.component';
import { ParkingStatusComponent } from '../components/parking-status/parking-status.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  imports:[BookingComponent, FindVehicleComponent, ParkingStatusComponent]
})
export class ReservationComponent { }
