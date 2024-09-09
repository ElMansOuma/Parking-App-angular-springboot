// src/app/user/user-profile/user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { ProfileUserService } from '../../shared/services/profile-user.service';
import { ProfileUser } from '../../shared/models/profile-user.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthUserService } from '../../shared/services/auth-user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  showChangePasswordForm: boolean = false;

  constructor(private authService: AuthUserService, private router: Router) { }

  toggleChangePasswordForm() {
    this.showChangePasswordForm = !this.showChangePasswordForm;
  }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      alert('New passwords do not match');
      return;
    }

    this.authService.changePassword(this.currentPassword, this.newPassword).subscribe({
      next: (response) => {
        alert('Password changed successfully');
        this.showChangePasswordForm = false;
      },
      error: (error) => {
        console.error('Failed to change password', error);
        alert('Failed to change password');
      }
    });
  }
}