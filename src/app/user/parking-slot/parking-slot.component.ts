import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parking-slot',
  standalone: true,
  templateUrl: './parking-slot.component.html',
  styleUrl: './parking-slot.component.css',
  imports: [RouterLink]
})
export class ParkingSlotComponent {
  slots = [
    { id: 1, slotNumber: 'P1', location: 'Ground Floor', status: 'Available' },
  ];
}
