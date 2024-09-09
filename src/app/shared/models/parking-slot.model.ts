export interface ParkingSlot {
  id: number;
  slotNumber: string;
  location: string;
  status: 'Available' | 'Occupied';  // Example statuses
}
