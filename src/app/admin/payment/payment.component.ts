import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  payments = [
    { id: 1, amount: 100.00, date: '2024-08-28', customer: 'John Doe', status: 'Completed' },
    // Additional payments as needed
  ];
}
