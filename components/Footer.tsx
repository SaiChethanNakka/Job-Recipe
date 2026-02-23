import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold text-stone-900">{APP_NAME}</p>
          <p className="text-sm text-stone-500 mt-1">© {new Date().getFullYear()} JobRecipie. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-stone-600">
          <a href="#" className="hover:text-brand-600 hover:underline">Privacy Policy</a>
          <a href="#" className="hover:text-brand-600 hover:underline">Terms of Service</a>
          <a href="#" className="hover:text-brand-600 hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
