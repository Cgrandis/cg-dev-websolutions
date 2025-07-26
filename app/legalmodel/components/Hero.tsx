import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative text-center py-24 sm:py-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(#A6A6A6_1px,transparent_1px)] [background-size:16px_16px] hidden dark:block animate-pulseBg"></div>
        <div className="absolute inset-0 bg-white dark:bg-legal-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 
          className="text-4xl sm:text-6xl font-bold tracking-tight text-legal-accent opacity-0 animate-fadeInUp"
        >
          Your Firm's First Impression, Perfected. Attract and Convert More Clients Online.
        </h1>
        <p 
          className="mt-6 text-lg sm:text-xl text-legal-bg dark:text-legal-text/90 max-w-2xl mx-auto opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          In a competitive market, your online presence is your greatest asset. 
          We provide law firms with bespoke, high-performance landing pages that 
          not only reflect your firm's prestige but are scientifically designed to 
          attract and retain your ideal clients.
        </p>
        <div 
          className="mt-10 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          <Link 
            href="/contact" 
            className="bg-legal-accent text-legal-bg font-bold px-8 py-3 rounded-md hover:bg-legal-accent-light transition-colors shadow-lg shadow-legal-accent/20"
          >
            Start Building
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;