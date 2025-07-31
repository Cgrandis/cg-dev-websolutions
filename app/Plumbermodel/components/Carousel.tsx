import React from 'react';
import { IoFlash } from "react-icons/io5";

const Carousel = () => {
  const benefits = [
    "Your Key Benefits",
    "Partner Level Service",
    "Direct access to our top experts",
    "Full-Service Firm",
    "Comprehensive Legal Solutions",
    "Agility & Speed",
    "Minimal Bureaucracy",
    "International Legal Solutions",
    "Trend-Focused",
    "Global Strength",
    "Market Expertise",
    "Client Centric",
  ];

  const extendedBenefits = [...benefits, ...benefits];

  return (
    <section className="py-12 bg-legal-bg-secondary dark:bg-legal-bg-secondary overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee min-w-full flex-shrink-0 items-center justify-around">
          {extendedBenefits.map((text, index) => (
            <div key={index} className="flex items-center mx-6">
              <IoFlash className="h-5 w-5 text-legal-accent mr-3 flex-shrink-0" />
              <span className="text-lg font-medium text-legal-text-secondary whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute top-0 flex animate-marquee min-w-full flex-shrink-0 items-center justify-around">
           {extendedBenefits.map((text, index) => (
            <div key={index} className="flex items-center mx-6">
              <IoFlash className="h-5 w-5 text-legal-accent mr-3 flex-shrink-0" />
              <span className="text-lg font-medium text-legal-text-secondary whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;