"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button 
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none" 
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-gray-100">{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <FaChevronDown className={`text-xl ${isOpen ? 'text-blue-500' : 'text-gray-500'}`} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="p-4 pt-0">
          <p className="text-gray-600 dark:text-gray-300 font-light">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const faqItems = [
  {
    title: "Why is a Next.js website better for my business?",
    content: "Next.js allows us to build incredibly fast websites that users and Google love. This translates to better search engine rankings (SEO), higher conversion rates, and a superior user experience compared to older, slower technologies.",
  },
  {
    title: "What is the process like?",
    content: "Our process is collaborative and transparent. We start with a discovery phase to understand your goals, move to design and development, and finish with a thorough testing and launch sequence. You'll be kept in the loop at every stage.",
  },
  {
    title: "How long will it take to build my website?",
    content: "A typical project takes between 4 to 8 weeks, depending on the complexity. We prioritize quality and won't rush the process, ensuring your final product is polished, secure, and ready to perform.",
  },
  {
    title: "What about hosting and maintenance?",
    content: "We deploy our projects on Vercel, the platform built by the creators of Next.js, for world-class performance and reliability. We also offer ongoing maintenance packages to ensure your site remains secure and up-to-date.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = faqItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
