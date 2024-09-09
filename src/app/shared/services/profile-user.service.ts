// src/app/shared/services/profile-user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileUser } from '../models/profile-user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {
  private apiUrl = 'http://localhost:8084/api/profile';  // Update the API endpoint

  constructor(private http: HttpClient) { }

  // Get user profile by ID
  getProfileUser(id: number): Observable<ProfileUser> {
    return this.http.get<ProfileUser>(`${this.apiUrl}/${id}`);
  }

  // Update user profile
  updateProfileUser(profileUser: ProfileUser): Observable<ProfileUser> {
    return this.http.put<ProfileUser>(`${this.apiUrl}/${profileUser.id}`, profileUser);
  }

  // Additional methods if needed
}
