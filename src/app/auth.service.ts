import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from './models/user.model';
@Injectable({
  providedIn: 'root' 
})
export class AuthService {

  private apiUrl = `${environment.api_url}/api`;

  constructor(private http: HttpClient) { }

  // Function for logging in a user
  login(email: string, password: string): Observable<User> {
    const loginPayload = {
      email: email,
      password: password
    };
    return this.http.get<User>(`${this.apiUrl}/login`, { params: loginPayload });
  }

  // Function for registering a user
  register(username: string, email: string, password: string): Observable<User> {
    const registerPayload = {
      username: username,
      email: email,
      password: password
    };
    return this.http.post<User>(`${this.apiUrl}/register`, registerPayload);
  }

}