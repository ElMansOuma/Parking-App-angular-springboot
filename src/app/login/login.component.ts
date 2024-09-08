import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { response } from 'express';
import { AuthService } from '../auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  providers: [AuthService, NgModel]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Login failed: ' + (error.error.message || error.message || 'Unknown error'));
      }
    });
  }
}