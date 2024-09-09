// src/app/models/booking.model.ts
export class Booking {
  id?: number;
  reference: string = '';  // Initialisé avec une valeur par défaut
  customerName: string = '';  // Initialisé avec une valeur par défaut
  vehicle: string = '';  // Initialisé avec une valeur par défaut
  duration: string = '';  // Initialisé avec une valeur par défaut
  slot: string = '';  // Initialisé avec une valeur par défaut
  status: string = 'Pending';  // Statut par défaut "Pending"
  remarks: string = '';  // Initialisé avec une valeur par défaut
  parkingSlot?: ParkingSlot;  // Propriété optionnelle

  constructor(init?: Partial<Booking>) {
    Object.assign(this, init);
  }
}

// src/app/models/parking-slot.model.ts
export class ParkingSlot {
  id?: number;
  slotNumber: string = '';  // Initialisé avec une valeur par défaut
}
