import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-plumber-text-dark text-plumber-text-dark dark:text-plumber-text-light border-t border-gray-200 dark:border-plumber-primary/20">
      <div className="container mx-auto px-4 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} I am a Plumber. All rights reserved.</p>
        <p className="mt-2 text-sm text-plumber-text-dark/70 dark:text-plumber-text-light/70">
          Serving [Your Town/City] and surrounding areas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;