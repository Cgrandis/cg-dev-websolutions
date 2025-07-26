import React from 'react';
import { IoShieldCheckmarkOutline, IoDocumentTextOutline, IoAnalyticsOutline } from "react-icons/io5";

const Features = () => {
  const features = [
    {
      Icon: IoDocumentTextOutline,
      title: "Automated Document Analysis",
      description: "Upload legal documents and our AI will extract key clauses, dates, and entities in seconds."
    },
    {
      Icon: IoShieldCheckmarkOutline,
      title: "Risk Assessment Score",
      description: "Receive a comprehensive risk score based on contract language, helping you identify potential issues."
    },
    {
      Icon: IoAnalyticsOutline,
      title: "Clause Comparison",
      description: "Compare clauses against industry standards or your own templates to ensure compliance and consistency."
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-legal-bg-secondary p-6 rounded-lg border border-gray-200 dark:border-legal-text-secondary/20">
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
