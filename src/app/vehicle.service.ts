import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleCategory, VehicleOwner } from './models/vehicle.model';  // Importing the specific models

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private categoriesUrl = 'http://localhost:8084/api/vehicles/categories';
  private ownersUrl = 'http://localhost:8084/api/vehicles/owners';

  constructor(private http: HttpClient) { }

  // Category Methods
  getAllCategories(): Observable<VehicleCategory[]> {  // Replace any[] with VehicleCategory[]
    return this.http.get<VehicleCategory[]>(this.categoriesUrl);
  }

  addCategory(category: VehicleCategory): Observable<VehicleCategory> {  // Replace any with VehicleCategory
    return this.http.post<VehicleCategory>(this.categoriesUrl, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.categoriesUrl}/${id}`);
  }

  // Owner Methods
  getAllOwners(): Observable<VehicleOwner[]> {  // Replace any[] with VehicleOwner[]
    return this.http.get<VehicleOwner[]>(this.ownersUrl);
  }

  addOwner(owner: VehicleOwner): Observable<VehicleOwner> {  // Replace any with VehicleOwner
    return this.http.post<VehicleOwner>(this.ownersUrl, owner);
  }

  deleteOwner(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ownersUrl}/${id}`);
  }
}
