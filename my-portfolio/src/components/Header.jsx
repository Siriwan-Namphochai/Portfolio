// src/components/Header.jsx
import React from 'react';
import profileImage from '../assets/Image.jpg';
import { BellIcon, Bars3Icon } from '@heroicons/react/24/outline'; // อย่าลืม import Bars3Icon

const Header = ({ setIsMobileMenuOpen }) => { // รับ setIsMobileMenuOpen เข้ามาใน props
  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 shadow-sm px-4">
      {/* เพิ่มปุ่ม Hamburger Menu สำหรับ Mobile */}
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
        <button className="p-1 text-gray-400 rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <BellIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={profileImage}
            alt="Siriwan Namphochai"
          />
          <span className="hidden text-sm font-medium text-gray-700 md:block">Siriwan Namphochai</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;