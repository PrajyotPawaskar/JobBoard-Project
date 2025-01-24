import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t font-custom border-gray-200 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
