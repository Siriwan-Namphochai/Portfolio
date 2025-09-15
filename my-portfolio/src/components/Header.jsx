// src/components/Header.jsx
import React from 'react';
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'; // You'll need to install Heroicons

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200 shadow-sm px-4">
      {/* Search Bar */}
      <div className="relative w-full max-w-lg">
        <MagnifyingGlassIcon className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* User and Notifications */}
      <div className="flex items-center space-x-4">
        <button className="p-1 text-gray-400 rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <BellIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Tom Cook"
          />
          <span className="hidden text-sm font-medium text-gray-700 md:block">Tom Cook</span>
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