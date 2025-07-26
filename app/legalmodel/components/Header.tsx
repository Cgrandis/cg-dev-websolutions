'use client';

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-legal-bg/80 border-b border-legal-text-secondary/20 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/legalmodel" className="text-2xl font-semibold text-legal-accent tracking-tight">
         LegalModel
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-legal-text-secondary hover:text-legal-accent transition-colors"
          >
            Main Site
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-legal-text-secondary hover:text-legal-accent transition-colors"
          >
            Contact
          </Link>
         
          <ThemeSwitch />
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-legal-text-secondary hover:text-legal-accent focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
             <Link
                href="/"
                className="text-sm font-medium text-legal-text-secondary hover:text-legal-accent transition-colors"
                onClick={() => setMenuOpen(false)}
             >
                Main Site
             </Link>
             <Link
                href="/contact"
                className="text-sm font-medium text-legal-text-secondary hover:text-legal-accent transition-colors"
                onClick={() => setMenuOpen(false)}
             >
                Contact
             </Link>
          </nav>
        </div>
      )}
    </header>
  );
}