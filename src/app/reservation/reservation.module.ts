import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { BookingComponent } from '../components/booking/booking.component';
import { FindVehicleComponent } from '../components/find-vehicle/find-vehicle.component';
import { ParkingStatusComponent } from '../components/parking-status/parking-status.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookingComponent,
    FindVehicleComponent,
    ParkingStatusComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BookingComponent,
    FindVehicleComponent,
    ParkingStatusComponent
  ]
})
export class ReservationModule { }
