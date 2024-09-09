import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { DashboardService } from '../../shared/services/dashboard.service';
import { DashboardStats } from '../../shared/models/dashboard-stats.model';
import { routes } from '../../app.routes';


@Component({
  selector: 'dashboard-app',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  totalBookings: number = 0;
  totalParkingSlots: number = 0;
  totalVehicles: number = 0;
  totalVehicleOwners: number = 0;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardStats();
  }

  loadDashboardStats(): void {
    this.dashboardService.getDashboardStats().subscribe((data: DashboardStats) => {
      this.totalBookings = data.totalBookings;
      this.totalParkingSlots = data.totalParkingSlots;
      this.totalVehicles = data.totalVehicles;
      this.totalVehicleOwners = data.totalVehicleOwners;
    });
  }
}