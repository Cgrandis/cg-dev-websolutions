import React from 'react';
import Image from 'next/image';
import { Phone, Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-plumber-text-dark">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-plumber-text-dark dark:text-plumber-text-light">
              Your Trusted Local Plumber
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-plumber-text-dark/70 dark:text-plumber-text-light/70">
              Fast, reliable, and professional solutions for all your plumbing needs. From emergency leaks to boiler installations, we've got you covered.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-plumber-primary text-white font-bold px-8 py-3 rounded-md hover:bg-plumber-primary-light transition-colors text-lg shadow-lg">
                <Wrench className="h-5 w-5" />
                Get a Free Quote
              </a>
              <a href="tel:01234567890" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-plumber-accent text-plumber-text-dark font-bold px-8 py-3 rounded-md hover:opacity-90 transition-colors text-lg shadow-lg">
                <Phone className="h-5 w-5" />
                01234 567890
              </a>
            </div>
          </div>

          <div className="w-full max-w-sm mx-auto md:max-w-none">
            <Image
              src="/products/plumber_image.png"
              alt="A professional and friendly plumber ready to help"
              width={500}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;