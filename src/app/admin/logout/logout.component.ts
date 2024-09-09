import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    // Clear user session data
    localStorage.clear(); // or sessionStorage.clear();
    // Redirect to the login page after a short delay
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000); // 2 seconds delay before redirect
  }
}
