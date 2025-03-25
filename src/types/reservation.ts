
export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
}

export interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  specialDay: string;
  specialName: string;
}
