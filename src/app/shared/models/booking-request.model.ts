// src/app/models/booking-request.model.ts
export interface BookingRequest {
  id: number;
  reference: string;
  date: string;
  vehicle: string;
  slot: string;
  status: string;
  remarks: string;
}
