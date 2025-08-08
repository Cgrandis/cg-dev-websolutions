import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-services-border/50 dark:border-services-border/20">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-services-text-secondary dark:text-gray-400">
          &copy; {new Date().getFullYear()} CGDev. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-services-accent dark:text-services-bg">
          Building the Future of the Web
        </p>
      </div>
    </footer>
  );
};

export default Footer;