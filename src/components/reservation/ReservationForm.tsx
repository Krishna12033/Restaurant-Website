
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { ReservationFormData } from '@/types/reservation';

interface ReservationFormProps {
  formData: ReservationFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  minDate: string;
  onCancel: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
  minDate,
  onCancel
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input 
            id="phone" 
            name="phone" 
            type="tel" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input 
            id="date" 
            name="date" 
            type="date" 
            min={minDate}
            value={formData.date} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <Input 
            id="time" 
            name="time" 
            type="time" 
            value={formData.time} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="guests">Number of Guests</Label>
        <Input 
          id="guests" 
          name="guests" 
          type="number" 
          min="1" 
          max="10" 
          value={formData.guests} 
          onChange={handleChange} 
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="specialRequest">Special Requests (Optional)</Label>
        <Textarea 
          id="specialRequest" 
          name="specialRequest" 
          value={formData.specialRequest} 
          onChange={handleChange} 
          rows={3} 
        />
      </div>
      
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Confirm Reservation'
          )}
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;
