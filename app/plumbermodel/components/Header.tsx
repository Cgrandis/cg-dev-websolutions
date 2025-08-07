'use client';

import Link from "next/link";
import { Phone } from "lucide-react";
import ThemeSwitch from "./ThemeSwitch"; 

export default function Header() {
  return (
    <header className="bg-white/80 dark:bg-plumber-text-dark/80 border-b border-gray-200 dark:border-plumber-primary/20 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/plumbermodel" className="text-2xl font-bold text-plumber-primary dark:text-white tracking-tight">
          I am a <span className="text-plumber-secondary">Plumber</span>
        </Link>
        
        <div className="flex items-center gap-4">
            <a 
              href="tel:01234567890" 
              className="hidden sm:flex items-center gap-2 bg-plumber-accent text-plumber-text-dark font-bold px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            
            <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}