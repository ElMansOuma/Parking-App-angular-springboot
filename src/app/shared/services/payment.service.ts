import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as paymentModel from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentsUrl = 'http://localhost:8084/api/payments';

  constructor(private http: HttpClient) { }

  getAllPayments(): Observable<paymentModel.Payment[]> {
    return this.http.get<paymentModel.Payment[]>(this.paymentsUrl);
  }

  addPayment(payment: paymentModel.Payment): Observable<paymentModel.Payment> {
    return this.http.post<paymentModel.Payment>(this.paymentsUrl, payment);
  }

  deletePayment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.paymentsUrl}/${id}`);
  }
}
