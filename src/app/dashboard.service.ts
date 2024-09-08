import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingSlot } from './models/parking-slot.model';
import { Vehicle } from './models/vehicle.model';  // Ensure the Vehicle import

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8084/api/dashboard';  // Your backend API URL

  constructor(private http: HttpClient) { }

  getParkingSlots(): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(`${this.apiUrl}/parking-slots`);
  }

  getOwnedVehicles(userId: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/owned-vehicles/${userId}`);
  }
}
