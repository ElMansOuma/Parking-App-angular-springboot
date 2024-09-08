import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingSlotService {
  private apiUrl = `${environment.api_url}/api/parking-slots`;

  constructor(private http: HttpClient) { }

  getAllSlots(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addSlot(slot: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, slot);
  }

  deleteSlot(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
