import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../../shared/services/auth-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule]
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authUserService: AuthUserService, private router: Router) { }

  login() {
    this.authUserService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Login failed: ' + (error.error.message || error.message || 'Unknown error'));
      }
    });
  }
}
