'use client';

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-services-bg/80 dark:bg-services-text/80 border-b border-services-border/50 dark:border-services-border/20 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-services-text dark:text-services-bg tracking-tight">
          CG<span className="text-services-accent dark:text-services-border">Dev</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-services-text-secondary dark:text-services-border hover:text-services-text dark:hover:text-services-bg transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-services-text-secondary dark:text-services-border hover:text-services-text dark:hover:text-services-bg transition-colors"
          >
            Contact
          </Link>
          <ThemeSwitch />
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-services-text-secondary dark:text-services-border hover:text-services-text dark:hover:text-services-bg focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 border-t border-services-border/50 dark:border-services-border/20 mt-2 pt-2">
          <nav className="flex flex-col items-start space-y-2">
            <Link
              href="/"
              className="text-sm font-medium text-services-text-secondary dark:text-services-border hover:text-services-text dark:hover:text-services-bg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-services-text-secondary dark:text-services-border hover:text-services-text dark:hover:text-services-bg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <ThemeSwitch />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
