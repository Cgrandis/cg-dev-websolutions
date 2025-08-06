import React from 'react';
import { SiNextdotjs } from "react-icons/si";
import { IoConstructOutline, IoColorPaletteOutline, IoSparklesOutline, IoCheckmark } from "react-icons/io5";

const HeroFeatures = () => {
  const newFeatures = [
    {
      Icon: IoConstructOutline,
      title: "We Build Your Project",
      items: ["Landing Pages with high level performances", "SaaS Applications, that meet's your needs"]
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
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="text-left opacity-0 animate-fadeInUp 
                       bg-white/40 dark:bg-black/80 
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
  );
};

export default HeroFeatures;
