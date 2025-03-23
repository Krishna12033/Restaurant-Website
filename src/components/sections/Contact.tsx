
import React, { useState } from 'react';
import Button from '../ui/Button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
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
    <section id="contact" className="section-padding bg-white dark:bg-zinc-950">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/5 px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary dark:bg-primary/10">
            Reservations
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Book Your Table
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Reserve your table for a memorable dining experience. For special events or large parties, please contact us directly.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Reservation Form */}
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

          {/* Contact Info & Map */}
          <div className="flex flex-col">
            <div className="mb-6 rounded-lg border border-border/40 bg-white p-6 shadow-sm dark:bg-zinc-900">
              <h3 className="font-serif text-xl font-semibold">Contact Information</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Phone</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      (123) 456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Email</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      info@tastehub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Address</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      123 Culinary Avenue, Flavor District, FD 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 8v4l3 3"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Hours</h4>
                    <div className="mt-1 text-sm text-muted-foreground">
                      <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                      <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                      <p>Sunday: 5:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map (placeholder) */}
            <div className="h-60 flex-1 overflow-hidden rounded-lg border border-border/40 bg-secondary/20 shadow-sm">
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Interactive map would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
