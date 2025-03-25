
import React, { useState } from 'react';
import Button from '../ui/Button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequest: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create reservation in Supabase
      const { data, error } = await supabase
        .from('reservations')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            reservation_date: formData.date,
            reservation_time: formData.time,
            guests: parseInt(formData.guests || '2'),
            special_request: formData.specialRequest
          }
        ]);

      if (error) throw error;

      toast({
        title: "Reservation Confirmed!",
        description: `Thank you for your reservation, ${formData.name}. We look forward to serving you on ${formData.date}!`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        specialRequest: ''
      });
      
    } catch (error) {
      console.error('Error saving reservation:', error);
      
      toast({
        title: "Reservation Error",
        description: "Please ensure all fields are filled correctly. If this persists, please contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date in YYYY-MM-DD format for the date input min value
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  return (
    <div className="rounded-lg border border-border/40 bg-white p-6 shadow-sm dark:bg-zinc-900">
      <h3 className="font-serif text-xl font-semibold">Make a Reservation</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form below and we'll confirm your reservation shortly.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="date"
              className="text-sm font-medium text-foreground"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              min={tomorrowStr}
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="time"
              className="text-sm font-medium text-foreground"
            >
              Time
            </label>
            <input
              id="time"
              type="time"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="guests"
              className="text-sm font-medium text-foreground"
            >
              Number of Guests
            </label>
            <select
              id="guests"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'person' : 'people'}
                </option>
              ))}
              <option value="9+">9+ people</option>
            </select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-foreground"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="specialRequest"
            className="text-sm font-medium text-foreground"
          >
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequest"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Any special requests or dietary requirements"
            rows={3}
            value={formData.specialRequest}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button size="lg" className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Reserve Now'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
