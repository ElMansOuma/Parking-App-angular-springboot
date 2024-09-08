export interface Vehicle {
  id: number;
  licensePlate: string;
  ownerId: number; // This will link the vehicle to the owner
  categoryId: number; // This will link the vehicle to a category
}

export interface VehicleCategory {
  id: number;
  name: string;
  description: string;
}

export interface VehicleOwner {
  id: number;
  name: string;
  contactInfo: string;
}
