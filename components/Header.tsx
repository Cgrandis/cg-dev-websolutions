'use client';

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black/90 shadow-sm border-b border-gray-100 dark:border-gray-800 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-primary dark:text-white tracking-tight">
          CG<span className="text-accent">Dev</span>
        </Link>

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

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-accent focus:outline-none"
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
              className="text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <ThemeSwitch />
          </nav>
        </div>
      )}
    </header>
  );
}
