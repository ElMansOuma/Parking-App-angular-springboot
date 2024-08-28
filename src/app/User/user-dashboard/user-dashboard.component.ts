import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Ensure this import is present

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  constructor(private router: Router) { }  // Ensure Router is correctly injected

  logout() {
    // Clear user session and navigate to login
    localStorage.clear();
    this.router.navigate(['/login']);  // Use the injected router to navigate
  }
}
