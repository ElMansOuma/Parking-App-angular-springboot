import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule for [(ngModel)]
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VehicleService } from '../../shared/services/vehicle.service';
import { VehicleCategory, VehicleOwner } from '../../shared/models/vehicle.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink
  ], // Ensure FormsModule is imported
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  categories: VehicleCategory[] = [];
  owners: VehicleOwner[] = [];
  newCategory: VehicleCategory = { id: 0, name: '', description: '' }; // For category form
  newOwner: VehicleOwner = { id: 0, name: '', contactInfo: '' }; // For owner form

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadOwners();
  }

  // Fetch categories from the backend
  loadCategories(): void {
    this.vehicleService.getAllCategories().subscribe((data: VehicleCategory[]) => {
      this.categories = data;
    });
  }

  // Fetch owners from the backend
  loadOwners(): void {
    this.vehicleService.getAllOwners().subscribe((data: VehicleOwner[]) => {
      this.owners = data;
    });
  }

  // Add a new category
  addCategory(): void {
    this.vehicleService.addCategory(this.newCategory).subscribe(() => {
      this.loadCategories(); // Refresh the list after adding
      this.newCategory = { id: 0, name: '', description: '' }; // Clear the form
    });
  }

  // Add a new owner
  addOwner(): void {
    this.vehicleService.addOwner(this.newOwner).subscribe(() => {
      this.loadOwners(); // Refresh the list after adding
      this.newOwner = { id: 0, name: '', contactInfo: '' }; // Clear the form
    });
  }

  // Delete a category
  deleteCategory(id: number): void {
    this.vehicleService.deleteCategory(id).subscribe(() => {
      this.loadCategories(); // Refresh the list after deletion
    });
  }

  // Delete an owner
  deleteOwner(id: number): void {
    this.vehicleService.deleteOwner(id).subscribe(() => {
      this.loadOwners(); // Refresh the list after deletion
    });
  }
}
