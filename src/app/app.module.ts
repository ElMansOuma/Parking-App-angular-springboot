import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/layout/navbar.component';
import { BookingComponent } from './components/booking/booking.component';
import { FindVehicleComponent } from './components/find-vehicle/find-vehicle.component';
import { ParkingStatusComponent } from './components/parking-status/parking-status.component';
import { SharedModule } from './shared/shared.module'; // Importez SharedModule ici

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookingComponent,
    FindVehicleComponent,
    ParkingStatusComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    SharedModule // Assurez-vous que SharedModule est importé
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
