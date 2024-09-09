import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})

export class AdminProfileComponent {
  constructor(private router: Router) { }

  onLogin(): void {
    // Implement your login validation logic here
    // If successful:
    this.router.navigate(['/dashboard']);
  }
}