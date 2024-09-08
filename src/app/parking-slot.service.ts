import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingSlot } from './models/parking-slot.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingSlotService {
  private apiUrl = 'http://localhost:8084/api/parking-slots';  // Change to your actual backend API URL

  constructor(private http: HttpClient) { }

  // Get all parking slots
  getAllParkingSlots(): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(this.apiUrl);
  }

  // Add a parking slot
  addParkingSlot(slot: ParkingSlot): Observable<ParkingSlot> {
    return this.http.post<ParkingSlot>(this.apiUrl, slot);
  }

  // Delete a parking slot
  deleteParkingSlot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
