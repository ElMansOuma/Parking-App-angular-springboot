import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'  // Service is available globally in the app
})
export class AuthService {

  private apiUrl = `${environment.api_url}/auth`;

  constructor(private http: HttpClient) { }

  // User registration
  signUp(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  // User login
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // User logout
  logout(): void {
    localStorage.removeItem('token'); // Remove the token from localStorage
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Store authentication token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Retrieve authentication token
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
