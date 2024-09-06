import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  login() {
    const loginPayload = {
      email: this.email,
      password: this.password
    };

    this.http.get(`http://localhost:8082/api/login?email=${this.email}&password=${this.password}`)
      .subscribe(response => {
        console.log('Login successful', response);
      }, error => {
        console.error('Login failed', error);
      });
  }
}
