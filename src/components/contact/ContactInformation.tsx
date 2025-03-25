
import React from 'react';

const ContactInformation = () => {
  return (
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
  );
};

export default ContactInformation;
