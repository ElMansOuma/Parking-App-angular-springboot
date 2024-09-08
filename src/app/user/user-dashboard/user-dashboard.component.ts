import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Ensure this import is present
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule], // Ensure FormsModule is imported

  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  parkingSlotsAvailable: number = 0;
  ownedVehicles: number = 0;

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    // Fetch parking slots and vehicle info from the service
    this.dashboardService.getParkingSlots().subscribe(slots => {
      this.parkingSlotsAvailable = slots.length;
    });

    this.dashboardService.getOwnedVehicles().subscribe(vehicles => {
      this.ownedVehicles = vehicles.length;
    });
  }

  logout() {
    // Clear user session and navigate to login
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
