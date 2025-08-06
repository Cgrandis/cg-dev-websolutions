'use client';

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import ToggleMenu from "./ToggleMenu";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 dark:bg-black/80 shadow-sm border-b border-gray-100 dark:border-gray-800 backdrop-blur-md sticky top-0 z-40 transition-all">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-accent focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="text-2xl font-semibold text-primary dark:text-white tracking-tight">
              CG<span className="text-accent">Dev</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <ThemeSwitch />
          </nav>

        </div>
      </header>

      <ToggleMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
