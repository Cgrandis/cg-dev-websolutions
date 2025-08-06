"use client";

import React from 'react';
import Link from 'next/link';
import { X, FileText, LayoutTemplate, ShoppingCart, Cloud } from 'lucide-react';

interface ToggleMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ToggleMenu: React.FC<ToggleMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        className={`relative flex flex-col h-full w-full max-w-sm bg-white dark:bg-dark-base-100 shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
          <h2 className="text-lg font-semibold text-base-content dark:text-dark-base-content">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-base-content/70 dark:text-dark-base-content/70 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-grow p-4">
          <h3 className="px-2 text-sm font-semibold text-base-content/60 dark:text-dark-base-content/60 uppercase tracking-wider">
            Examples
          </h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="/legalmodel"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-base-content dark:text-dark-base-content hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={onClose}
              >
                <FileText className="h-5 w-5" />
                <span>Legal Model Page</span>
              </Link>
            </li>
                        
            <li>
              <a
                href="https://nextjs-saas-starter-template.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-base-content dark:text-dark-base-content hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={onClose}
              >
                <LayoutTemplate className="h-5 w-5" />
                <span>Landing Page</span>
              </a>
            </li>

            <li>
              <a
                href="https://demo.vercel.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-base-content dark:text-dark-base-content hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={onClose}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>E-commerce</span>
              </a>
            </li>

            <li>
              <a
                href="https://nextjs-supabase-stripe-update.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-2 py-2 rounded-md text-base-content dark:text-dark-base-content hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-primary dark:hover:text-accent transition-colors"
                onClick={onClose}
              >
                <Cloud className="h-5 w-5" />
                <span>SaaS Application</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ToggleMenu;
