import React from 'react';
import Link from 'next/link';
import HeroFeatures from './HeroFeatures'; 

export default function Hero() {
  return (
    <section className="relative text-center py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-40 opacity-40 dark:opacity-30"
      >
        <div className="blur-[120px] h-64 bg-gradient-to-br from-primary to-accent-light dark:from-primary-light"></div>
        <div className="blur-[120px] h-48 bg-gradient-to-r from-accent-light to-primary-light dark:to-primary"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="font-sans text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-base-content dark:text-white pb-4 opacity-0 animate-fadeInUp"
        >
          Are you looking for a <span className="bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">Landing Page</span>, <span className="bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">SaaS Application</span>, or <span className="bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text">E-commerce Store</span>?
        </h1>
        
        <p 
          className="max-w-3xl mx-auto text-lg sm:text-xl text-base-content dark:text-dark-base-content opacity-80 mb-10 font-light opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          Stop fighting for visibility. Next.js empowers you with 
          Server-Side Rendering and Static Generation, delivering blazing-fast,
          perfectly optimized pages that search engines love. Climb the ranks 
          and capture the organic traffic you deserve.
        </p>
        
        <div 
          className="flex justify-center opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
            <Link href="/contact" className="bg-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-primary-light transition-colors duration-300">
                Start Your Project
            </Link>
        </div>

        <HeroFeatures />
        
      </div>
    </section>
  );
}
