import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './admin/booking/booking.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { VehiculeComponent } from './admin/vehicule/vehicule.component';
import { ParkingSlotComponent } from './admin/parking-slot/parking-slot.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { BookingRequestComponent } from './user/booking-request/booking-request.component';
import { LogoutComponent } from './logout/logout.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vehicule', component: VehiculeComponent },
  { path: 'parking-slot', component: ParkingSlotComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'booking-request', component: BookingRequestComponent },
  { path: 'logout', component: LogoutComponent },




];
