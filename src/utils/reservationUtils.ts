
import { ReservationFormData } from '@/types/reservation';
import { supabase } from '@/lib/supabase';

export const saveReservation = async (
  formData: ReservationFormData, 
  specialDay: string, 
  specialName: string
) => {
  try {
    // First, insert the reservation data into Supabase
    const { data, error } = await supabase
      .from('reservations')
      .insert([
        { 
          ...formData, 
          specialDay, 
          specialName 
        }
      ])
      .select();
    
    if (error) throw error;
    
    // Send email notification to restaurant owner
    await notifyRestaurantOwner(formData, specialDay, specialName);
    
    return { success: true, data };
  } catch (error) {
    console.error('Error saving reservation:', error);
    return { success: false, error };
  }
};

export const notifyRestaurantOwner = async (
  formData: ReservationFormData,
  specialDay: string,
  specialName: string
) => {
  try {
    // Send email using Supabase Edge Function
    const { error } = await supabase.functions.invoke('send-reservation-email', {
      body: {
        reservation: {
          ...formData,
          specialDay,
          specialName
        },
        recipient: 'restaurant@example.com', // Replace with actual restaurant email
      }
    });
    
    if (error) throw error;
    
    return { success: true };
  } catch (error) {
    console.error('Error sending email notification:', error);
    return { success: false, error };
  }
};

export const getTomorrowDate = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};
