// src/app/models/payment.model.ts
export interface Payment {
  id: number | null;
  amount: number;
  date: string;
  customer: string;
  status: string;
}
