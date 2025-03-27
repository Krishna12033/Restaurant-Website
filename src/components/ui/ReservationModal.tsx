
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { ReservationFormData, ReservationModalProps } from '@/types/reservation';
import { getTomorrowDate, saveReservation } from '@/utils/reservationUtils';
import ReservationForm from '@/components/reservation/ReservationForm';

const ReservationModal: React.FC<ReservationModalProps> = ({ 
  isOpen, 
  onClose, 
  specialDay, 
  specialName 
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await saveReservation(formData, specialDay, specialName);
      
      if (result.success) {
        toast({
          title: "Reservation Confirmed!",
          description: `Thank you for your reservation, ${formData.name}. We look forward to serving you on ${formData.date}!`,
        });
        
        onClose();
      } else {
        throw new Error('Failed to save reservation');
      }
    } catch (error) {
      console.error('Error processing reservation:', error);
      
      toast({
        title: "Reservation Error",
        description: "Please ensure all fields are filled correctly. If this persists, please contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const tomorrowStr = getTomorrowDate();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Reserve for {specialName}
          </DialogTitle>
        </DialogHeader>
        
        <ReservationForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          minDate={tomorrowStr}
          onCancel={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
