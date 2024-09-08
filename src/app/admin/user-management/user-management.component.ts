import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  users = [
    { id: 1, username: 'johndoe', email: 'johndoe@example.com', role: 'Admin', status: 'Active' },
    // Additional users as needed
  ];
}
