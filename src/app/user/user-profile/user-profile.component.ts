// src/app/user/user-profile/user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { ProfileUserService } from '../../shared/services/profile-user.service';
import { ProfileUser } from '../../shared/models/profile-user.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
export class UserProfileComponent implements OnInit {
  profileUser: ProfileUser = {
    id: 0,
    username: '',
    email: '',
    fullName: '',
    phoneNumber: '',
    address: ''
  };

  constructor(private profileUserService: ProfileUserService) { }

  ngOnInit(): void {
    this.loadUserProfile(1);  // You can replace '1' with the current user ID dynamically
  }

  // Load user profile from the service
  loadUserProfile(userId: number): void {
    this.profileUserService.getProfileUser(userId).subscribe((data: ProfileUser) => {
      this.profileUser = data;
    });
  }

  // Update user profile
  saveProfile(): void {
    this.profileUserService.updateProfileUser(this.profileUser).subscribe(response => {
      console.log('Profile updated successfully', response);
    });
  }
}