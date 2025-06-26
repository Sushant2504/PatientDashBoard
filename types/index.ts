export interface Patient {
  name: string;
  patientId: string;
  plan: string;
  deliveryDate: string;
  remainingMeds: number;
  status: 'active' | 'inactive';
}

export interface Shipment {
  date: string;
  status: string;
  quantity: number;
}