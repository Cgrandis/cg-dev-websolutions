import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiVercel,
  SiPostgresql,
  SiTailwindcss,
  SiStripe,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Vercel", Icon: SiVercel },
  { name: "Stripe", Icon: SiStripe },
];

const TechStack: React.FC = () => {
  return (
    <div className="w-full py-16 bg-black dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-black mb-4">
          Built with Industry-Leading Technology
        </h2>
        
        <p className="text-lg text-gray-400 dark:text-gray-600 max-w-3xl mx-auto mb-12">
          We use a curated stack of modern, best-in-class technologies to ensure your project
          is fast, scalable, and secure from day one.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8">
          {technologies.map(({ name, Icon }) => (
            <div 
              key={name} 
              className="flex flex-col items-center justify-center gap-2 text-white dark:text-black opacity-70 hover:opacity-100 transition-opacity duration-200"
            >
              <Icon className="text-4xl md:text-5xl" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
