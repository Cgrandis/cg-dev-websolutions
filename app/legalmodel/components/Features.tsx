import React from 'react';
import { 
  IoTrendingUpOutline, 
  IoRocketOutline, 
  IoShieldCheckmarkOutline, 
  IoPhonePortraitOutline 
} from "react-icons/io5";

const Features = () => {
  const features = [
    {
      Icon: IoTrendingUpOutline,
      title: "SEO Dominance",
      description: "Be the First Firm They Find. Being on page two of Google is like being invisible. Next.js is architected for peak Search Engine Optimization (SEO)."
    },
    {
      Icon: IoRocketOutline,
      title: "Unparalleled Speed",
      description: "In the legal field, every second counts. A slow website frustrates potential clients and sends them directly to your competitors. Our landing pages, built with Next.js, load almost instantly."
    },
    {
      Icon: IoShieldCheckmarkOutline,
      title: "Ironclad Security",
      description: "Protect Your Firm's Reputation. Your digital presence must be as secure and trustworthy as your legal advice. Next.js provides a modern, secure architecture that protects against common web vulnerabilities."
    },
    {
        Icon: IoPhonePortraitOutline,
        title: "Flawless on Every Device",
        description: "The Mobile-First Advantage. The majority of your potential clients will find you on their smartphone. A website that isn't perfectly optimized for mobile is a liability. Our landing pages offer a flawless, responsive experience on any device."
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-legal-bg-secondary p-6 rounded-lg border border-gray-200 dark:border-legal-text-secondary/20 
                         opacity-0 animate-fadeInUp 
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <feature.Icon className="h-8 w-8 text-legal-accent mb-4" />
              <h3 className="text-xl font-semibold text-legal-bg dark:text-legal-text mb-2">{feature.title}</h3>
              <p className="text-legal-bg/70 dark:text-legal-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
