
import { ReservationFormData } from '@/types/reservation';

export const saveReservation = async (
  formData: ReservationFormData, 
  specialDay: string, 
  specialName: string
) => {
  // Simulate a database save
  console.log('Saving reservation:', { 
    ...formData, 
    specialDay, 
    specialName 
  });
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data
  return { success: true };
};

export const getTomorrowDate = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};
