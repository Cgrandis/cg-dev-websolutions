import React from 'react';
import Image from 'next/image';

const ImageWithText = () => {
  return (
    <div className="py-16 sm:py-24 px-4 space-y-24">
      
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
            Evidence Your Firm's Legal Expertise.
          </h2>
          <p className="text-lg text-legal-bg/80 dark:text-legal-text-secondary mb-4">
            "As a dynamic, forward-thinking law firm, we deliver bespoke legal services 
            that empower clients to reach their goals."
          </p>
          <p className="text-lg text-legal-bg/80 dark:text-legal-text-secondary">
            "Over the past decade, we’ve adapted to evolving client needs, expanded our expertise, 
            and created opportunities for growth. Our commitment to excellence, innovation, 
            and trusted partnerships ensures our clients benefit from insightful, 
            high-level counsel across diverse areas of law."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-left md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-legal-accent mb-4">
            Built for the Modern Legal Landscape.
          </h2>
          <p className="text-lg text-legal-bg/80 dark:text-legal-text-secondary mb-4">
            In a world of digital transformation, your firm needs a platform that's not just powerful, but also intuitive. We prioritize a clean, user-centric design that reduces complexity and allows your team to focus on what they do best.
          </p>
          <p className="text-lg text-legal-bg/80 dark:text-legal-text-secondary">
            Secure, scalable, and fully compliant, our solutions are engineered to meet the rigorous demands of the legal industry, ensuring your data is protected and your workflow is seamless.
          </p>
        </div>
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:order-2">
          <Image
            src="/products/Gemini_Generated_Image_t605e5t605e5t605.png"
            alt="A modern and clean user interface for a legal application"
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-full shadow-lg"
          />
        </div>
      </div>

    </div>
  );
};

export default ImageWithText;
