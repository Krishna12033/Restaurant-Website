
import React from 'react';
import ContactForm from '../contact/ContactForm';
import ContactInformation from '../contact/ContactInformation';
import LocationMap from '../contact/LocationMap';
import SectionHeader from '../contact/SectionHeader';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-zinc-950">
      <div className="container-custom">
        <SectionHeader 
          title="Book Your Table" 
          subtitle="Reserve your table for a memorable dining experience. For special events or large parties, please contact us directly."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Reservation Form */}
          <ContactForm />

          {/* Contact Info & Map */}
          <div className="flex flex-col">
            <ContactInformation />
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
