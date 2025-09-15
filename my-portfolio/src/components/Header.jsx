// src/components/Header.jsx
import React from 'react';
import profileImage from '../assets/Image.jpg';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline'; 

const Header = ({ setIsMobileMenuOpen }) => { 
  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 shadow-sm px-4">
      <button
        type="button"
        className="-m-2 p-2 text-gray-500 sm:hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* User and Notifications */}
      <div className="flex items-center space-x-4 ml-auto">
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={profileImage}
            alt="Siriwan Namphochai"
          />
          <span className="hidden text-sm font-medium text-gray-700 md:block">Siriwan Namphochai</span>
        </div>
      </div>
    </div>
  );
};

export default Header;