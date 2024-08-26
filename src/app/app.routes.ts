import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ParkingComponent } from './parking/parking.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BookingComponent } from './components/booking/booking.component';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'parking', component: ParkingComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'booking', component: BookingComponent },

];
