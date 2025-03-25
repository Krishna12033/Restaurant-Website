
import { supabase } from '@/lib/supabase';
import { ReservationFormData } from '@/types/reservation';

export const saveReservation = async (
  formData: ReservationFormData, 
  specialDay: string, 
  specialName: string
) => {
  const { data, error } = await supabase
    .from('reservations')
    .insert([
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        reservation_date: formData.date,
        reservation_time: formData.time,
        guests: parseInt(formData.guests),
        special_request: formData.specialRequest,
        special_day: specialDay,
        special_name: specialName
      }
    ]);

  if (error) throw error;
  return data;
};

export const getTomorrowDate = (): string => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};
