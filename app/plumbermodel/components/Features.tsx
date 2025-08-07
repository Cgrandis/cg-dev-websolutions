import React from 'react';
import { Droplets, Flame, Bath, Wrench } from 'lucide-react';

const Features = () => {
  const services = [
    {
      Icon: Droplets,
      title: "Emergency Repairs",
      description: "24/7 call-out service for leaks, burst pipes, and urgent plumbing issues."
    },
    {
      Icon: Wrench,
      title: "Drain Cleaning",
      description: "Expert unblocking and cleaning for all types of drains and pipes."
    },
    {
      Icon: Flame,
      title: "Boiler Services",
      description: "Professional installation, servicing, and repair for all major boiler brands."
    },
    {
      Icon: Bath,
      title: "Bathroom Fitting",
      description: "Complete bathroom installation services, from design to final touches."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-plumber-bg-light dark:bg-plumber-text-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-plumber-text-dark dark:text-plumber-text-light">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-plumber-text-dark/70 dark:text-plumber-text-light/70">
                We offer a comprehensive range of plumbing services to meet all your needs.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-plumber-text-dark/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-plumber-primary/20 text-center">
              <div className="inline-block bg-plumber-accent p-4 rounded-full mb-4">
                <service.Icon className="h-8 w-8 text-plumber-text-dark" />
              </div>
              <h3 className="text-xl font-semibold text-plumber-text-dark dark:text-plumber-text-light mb-2">{service.title}</h3>
              <p className="text-plumber-text-dark/70 dark:text-plumber-text-light/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
