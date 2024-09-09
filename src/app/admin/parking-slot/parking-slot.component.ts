import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';  // Ensure Router import
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParkingSlotService } from '../../shared/services/parking-slot.service';
import { ParkingSlot } from '../../shared/models/parking-slot.model';

@Component({
  selector: 'app-parking-slot',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './parking-slot.component.html',
  styleUrls: ['./parking-slot.component.css']
})
export class ParkingSlotComponent implements OnInit {
  slots: ParkingSlot[] = [];  // Initialize slots array
  newSlot: ParkingSlot = { id: 0, slotNumber: '', location: '', status: 'Available' };  // Initialize newSlot object

  constructor(private parkingSlotService: ParkingSlotService) { }

  ngOnInit(): void {
    this.loadParkingSlots();
  }

  // Load all parking slots
  loadParkingSlots(): void {
    this.parkingSlotService.getAllParkingSlots().subscribe((data: ParkingSlot[]) => {
      this.slots = data;
    });
  }

  // Add a new parking slot
  addParkingSlot(): void {
    this.parkingSlotService.addParkingSlot(this.newSlot).subscribe(() => {
      this.loadParkingSlots();  // Reload the parking slots after adding
      this.newSlot = { id: 0, slotNumber: '', location: '', status: 'Available' };  // Reset the form
    });
  }

  // Delete a parking slot
  deleteSlot(slot: ParkingSlot): void {
    this.parkingSlotService.deleteParkingSlot(slot.id).subscribe(() => {
      this.loadParkingSlots();  // Reload after deletion
    });
  }
}