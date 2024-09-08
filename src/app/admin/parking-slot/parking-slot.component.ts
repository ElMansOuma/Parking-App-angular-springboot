import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Ensure Router import
import { ParkingSlotService } from '../services/parking-slot.service';  // Import the service

@Component({
  selector: 'app-parking-slot',
  standalone: true,
  templateUrl: './parking-slot.component.html',
  styleUrls: ['./parking-slot.component.css']
})
export class ParkingSlotComponent implements OnInit {
  slots = [];
  newSlot = { id: null, slotNumber: '', location: '', status: 'Available' };

  constructor(private parkingSlotService: ParkingSlotService, private router: Router) { }

  ngOnInit(): void {
    // Fetch parking slots from the service
    this.loadSlots();
  }

  loadSlots() {
    this.parkingSlotService.getAllSlots().subscribe(data => {
      this.slots = data;
    });
  }

  addSlot(): void {
    this.parkingSlotService.addSlot(this.newSlot).subscribe(() => {
      this.loadSlots();  // Refresh slots after adding
      this.newSlot = { id: null, slotNumber: '', location: '', status: 'Available' };  // Reset form
    });
  }

  editSlot(slot): void {
    // Logic to edit slot (Optional)
  }

  deleteSlot(id: number): void {
    this.parkingSlotService.deleteSlot(id).subscribe(() => {
      this.loadSlots();  // Refresh slots after deletion
    });
  }
}
