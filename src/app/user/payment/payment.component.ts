import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaymentService } from '../../shared/services/payment.service';
import { Payment } from '../../shared/models/payment.model';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  payments: Payment[] = [];

  // Initialize with default values
  paymentAmount: number = 0;
  paymentDate: string = '';
  paymentCustomer: string = '';
  paymentStatus: string = '';

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.loadPayments();
  }

  // Fetch all payments
  loadPayments(): void {
    this.paymentService.getAllPayments().subscribe((data: Payment[]) => {
      this.payments = data;
    });
  }

  addPayment(): void {
    const newPayment: Payment = {
      id: null,  // Set to null for a new payment
      amount: this.paymentAmount,
      date: this.paymentDate,
      customer: this.paymentCustomer,
      status: this.paymentStatus
    };

    this.paymentService.addPayment(newPayment).subscribe(() => {
      this.loadPayments();  // Refresh the list after adding
      this.clearForm();     // Clear the form fields after submission
    });
  }

  // Clear the form fields after payment submission
  clearForm(): void {
    this.paymentAmount = 0;
    this.paymentDate = '';
    this.paymentCustomer = '';
    this.paymentStatus = '';
  }
}