import React from 'react';
import Link from 'next/link';
import { SiNextdotjs } from "react-icons/si";
import { IoConstructOutline, IoColorPaletteOutline, IoSparklesOutline, IoCheckmark } from "react-icons/io5";

export default function Hero() {
  const newFeatures = [
    {
      Icon: IoConstructOutline,
      title: "We Build Your Project",
      items: ["Landing Pages", "SaaS Applications", "E-commerce Stores"]
    },
    {
      Icon: SiNextdotjs,
      title: "Using Next.js",
      items: ["Powerful SEO Advantage", "Blazing Fast Performance", "Enhanced Security"]
    },
    {
      Icon: IoColorPaletteOutline,
      title: "Design Under Your Choice",
      items: ["Fully Customizable Designs", "Collaborative Design Process", "Mobile-First & Responsive"]
    },
    {
      Icon: IoSparklesOutline,
      title: "We Offer a Personalised Experience",
      items: ["Direct Communication", "Tailored to Your Needs", "Ongoing Support"]
    }
  ];

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
          className="font-sans text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-8 bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text pb-4 opacity-0 animate-fadeInUp"
        >
          Dominate Search Rankings. Build with Next.js.
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

        <div className="mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="text-left opacity-0 animate-fadeInUp 
                           bg-white/40 dark:bg-primary-dark/60 
                           backdrop-blur-xl 
                           p-6 rounded-2xl 
                           border border-black/10 dark:border-white/20 
                           shadow-xl 
                           hover:shadow-2xl hover:border-black/20 dark:hover:border-white/30 
                           transition-all duration-300"
                style={{ animationDelay: `${0.6 + index * 0.15}s` }} 
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 dark:bg-accent/20 text-accent">
                    <feature.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-base-content dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-3 pl-1">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <IoCheckmark className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-base-content/80 dark:text-white/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
