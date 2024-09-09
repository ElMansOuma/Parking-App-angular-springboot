import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];  // List of users
  newUser: any = { id: 0, username: '', email: '', role: 'User', status: 'Active' };  // Initialize new user
  editMode: boolean = false;  // Track if editing
  userToEdit: any = null;  // User being edited

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Method to load users from backend
  loadUsers(): void {
    this.http.get<any[]>('http://localhost:8084/api/gerer-users').subscribe(data => {
      this.users = data;
    });
  }

  // Method to add or update a user
  addUser(): void {
    if (this.editMode && this.userToEdit) {
      // Update existing user
      this.http.put<User>(`http://localhost:8084/api/gerer-users/${this.userToEdit.id}`, this.newUser).subscribe(
        response => {
          console.log('User updated successfully:', response);
          this.loadUsers();  // Reload user list
          this.resetForm();  // Reset form after editing
          this.closeModal(); // Close modal after submission
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    } else {
      // Create new user
      this.http.post<User>('http://localhost:8084/api/gerer-users', this.newUser).subscribe(
        response => {
          console.log('User added successfully:', response);
          this.loadUsers();  // Reload user list
          this.resetForm();  // Reset form after adding
          this.closeModal(); // Close modal after submission
        },
        error => {
          console.error('Error adding user:', error);
        }
      );
    }
  }

  // Method to delete a user
  deleteUser(id: number): void {
    this.http.delete(`http://localhost:8084/api/gerer-users/${id}`).subscribe(() => {
      this.loadUsers();  // Reload user list after deletion
    });
  }

  // Method to edit a user
  editUser(user: any): void {
    this.newUser = { ...user };  // Copy the user to the form
    this.userToEdit = user;  // Set the user being edited
    this.editMode = true;  // Switch to edit mode
    this.openModal();  // Open the modal for editing
  }

  // Method to reset the form
  resetForm(): void {
    this.newUser = { id: 0, username: '', email: '', role: 'User', status: 'Active' };  // Reset the form
    this.userToEdit = null;  // Clear the user being edited
    this.editMode = false;  // Exit edit mode
  }

  // Programmatically close the modal
  closeModal(): void {
    const modalElement = document.getElementById('addUserModal') as HTMLElement;
    const modal = (window as any)['bootstrap'].Modal.getInstance(modalElement);
    modal.hide();
  }

  // Programmatically open the modal
  openModal(): void {
    const modalElement = document.getElementById('addUserModal') as HTMLElement;
    const modal = new (window as any)['bootstrap'].Modal(modalElement);
    modal.show();
  }
}
