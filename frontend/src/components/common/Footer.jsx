import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 text-gray-600 py-4 mt-8">
    <div className="container mx-auto px-4 text-center">
      &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
    </div>
  </footer>
);

export default Footer;
