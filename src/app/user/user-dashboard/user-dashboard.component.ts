import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  parkingSlotsAvailable: number = 0;
  ownedVehicles: number = 0;
  userId: number = 1;  // Example userId, you should replace this with actual logic to fetch userId.

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    // Fetch parking slots and vehicle info from the service
    this.dashboardService.getParkingSlots().subscribe(slots => {
      this.parkingSlotsAvailable = slots?.length || 0;
    });

    // Passing userId to get the owned vehicles
    this.dashboardService.getOwnedVehicles(this.userId).subscribe(vehicles => {
      this.ownedVehicles = vehicles?.length || 0;  // Use optional chaining to handle null cases
    });
  }

  logout() {
    // Clear user session and navigate to login
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
