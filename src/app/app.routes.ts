import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './user/booking/booking.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ParkingSlotComponent } from './admin/parking-slot/parking-slot.component';
import { PaymentComponent } from './user/payment/payment.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { BookingRequestComponent } from './admin/booking-request/booking-request.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { VehiculeComponent } from './user/vehicule/vehicule.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vehicule', component: VehiculeComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'parking-slot', component: ParkingSlotComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'booking-request', component: BookingRequestComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: '**', component: PageNotFoundComponent }
];
