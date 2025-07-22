import React from 'react';

const CheckCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const RocketIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.18-.65-.87-2.2-.86-3.18.05Z" />
    <path d="m12 15-3-3a9 9 0 0 1 3-13v0c0 3.6 2.2 6.4 5 8-1.6 2.8-4.4 5-8 5Z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 4 0 4 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-4 0-4" />
  </svg>
);
const WrenchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);
const TrendingUpIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

export default function Hero() {
  const features = [
    { text: "We build your project", Icon: WrenchIcon },
    { text: "Built for speed", Icon: RocketIcon },
    { text: "SEO Advantage", Icon: TrendingUpIcon },
    { text: "Fast, scalable, and loved by Google", Icon: CheckCircleIcon },
  ];

  return (
    <section className="text-center my-24 sm:my-32 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h1 className="font-sans text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-10 bg-gradient-to-r from-accent to-primary text-transparent bg-clip-text pb-4">
        Dominate Search Rankings. Build with Next.js.
      </h1>
      <p className="max-w-3xl mx-auto text-lg sm:text-xl text-base-content dark:text-dark-base-content opacity-80 mb-12 font-light">
        Stop fighting for visibility. Next.js empowers you with 
        Server-Side Rendering and Static Generation, delivering blazing-fast,
         perfectly optimized pages that search engines love. Climb the ranks 
         and capture the organic traffic you deserve.
      </p>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center sm:justify-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 dark:bg-accent/20 text-accent">
                  <feature.Icon className="h-6 w-6" />
                </div>
              </div>
              <p className="text-md sm:text-lg text-base-content dark:text-dark-base-content text-left">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}