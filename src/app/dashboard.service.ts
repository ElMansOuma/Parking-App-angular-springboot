import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = `${environment.api_url}/api/dashboard`;

  constructor(private http: HttpClient) { }

  getParkingSlots(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/parking-slots`);
  }

  getOwnedVehicles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/owned-vehicles`);
  }
}
