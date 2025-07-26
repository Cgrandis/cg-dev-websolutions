import React from 'react';
import Image from 'next/image';

const ImageWithText = () => {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0">
          <Image
            src="/products/Gemini_Generated_Image_xofc6gxofc6gxofc.png"
            alt="AI analyzing legal documents on a futuristic interface"
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-full shadow-lg"
          />
        </div>

        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-legal-accent mb-4">
            Visualize Your Data, Instantly.
          </h2>
          <p className="text-lg text-legal-bg/80 dark:text-legal-text-secondary mb-4">
            Our platform transforms complex legal jargon into clear, actionable insights. With intuitive dashboards and data visualizations, you can quickly identify risks, track changes, and make informed decisions without getting lost in the fine print.
          </p>
          <p className="text-lg text-legal-bg/80 dark:text-legal-text-secondary">
            From contract lifecycle management to compliance tracking, LegalModel provides the clarity you need to operate with confidence.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ImageWithText;