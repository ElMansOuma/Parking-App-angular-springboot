// booking-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingRequest } from '../models/booking-request.model';

@Injectable({
  providedIn: 'root'
})
export class BookingRequestService {
  private apiUrl = 'http://localhost:8084/api/booking-requests';  // URL du backend

  constructor(private http: HttpClient) { }

  // Charger toutes les demandes de réservation
  getAllRequests(): Observable<BookingRequest[]> {
    return this.http.get<BookingRequest[]>(this.apiUrl);
  }

  // Ajouter une nouvelle demande
  addRequest(request: BookingRequest): Observable<BookingRequest> {
    return this.http.post<BookingRequest>(this.apiUrl, request);
  }

  // Mettre à jour une demande existante
  updateRequest(id: number, request: BookingRequest): Observable<BookingRequest> {
    return this.http.put<BookingRequest>(`${this.apiUrl}/${id}`, request);
  }

  // Supprimer une demande
  deleteRequest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
