import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardStats } from '../models/dashboard-stats.model';  // Correctly import DashboardStats model

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://localhost:8084/api/global-dashboard/stats';  // The backend API endpoint for fetching dashboard stats

  constructor(private http: HttpClient) { }

  // Method to get the dashboard statistics from the backend
  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(this.apiUrl);
  }
}
