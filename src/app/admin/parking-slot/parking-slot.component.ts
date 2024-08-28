import { Component } from '@angular/core';

@Component({
  selector: 'app-parking-slot',
  standalone: true,
  imports: [],
  templateUrl: './parking-slot.component.html',
  styleUrl: './parking-slot.component.css'
})
export class ParkingSlotComponent {
  slots = [
    { id: 1, slotNumber: 'P1', location: 'Ground Floor', status: 'Available' },
  ];
}
