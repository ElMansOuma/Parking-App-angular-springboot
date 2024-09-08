import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrls: ['./booking-request.component.css']
})
export class BookingRequestComponent {
  requests = [
    { reference: 7545, date: '2024-08-28', vehicle: 'SUV', slot: 1, status: 'Pending', remarks: 'None' },
    { reference: 7546, date: '2024-08-29', vehicle: 'Sedan', slot: 2, status: 'Confirmed', remarks: 'Urgent' },
    // Additional booking requests can be added here
  ];

  // Methods to handle adding, editing, and deleting requests can be added here
}
