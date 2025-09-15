// src/components/Sidebar.jsx
import React from 'react';
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'; // You'll need to install Heroicons

const teams = [
  { initial: 'H', name: 'Heroicons' },
  { initial: 'T', name: 'Tailwind Labs' },
  { initial: 'W', name: 'Workcation' },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-white border-r border-gray-200">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center h-16 p-4 border-b border-gray-200">
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m14-8a7 7 0 10-14 0h14z"
          />
        </svg>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-gray-100 rounded-md group hover:bg-gray-200"
        >
          <HomeIcon className="w-6 h-6 mr-3 text-blue-500" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900"
        >
          <UsersIcon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" />
          Team
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900"
        >
          <FolderIcon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" />
          Projects
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900"
        >
          <CalendarIcon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" />
          Calendar
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900"
        >
          <DocumentIcon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" />
          Documents
        </a>
        <a
          href="#"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900"
        >
          <ChartBarIcon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" />
          Reports
        </a>
      </nav>

      {/* Teams Section */}
      <div className="px-2 py-4 border-t border-gray-200">
        <h3 className="px-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
          Your teams
        </h3>
        <ul className="mt-2 space-y-1">
          {teams.map((team, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="flex items-center justify-center w-6 h-6 mr-3 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full">
                  {team.initial}
                </span>
                {team.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Settings Link */}
      <div className="px-2 py-4 border-t border-gray-200">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900"
        >
          <Cog6ToothIcon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" />
          Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;