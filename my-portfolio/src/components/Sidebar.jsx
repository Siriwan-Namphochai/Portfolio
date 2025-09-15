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
  StarIcon, // <-- ต้องมี StarIcon ตรงนี้
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Sidebar = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => { 
  const navigation = [
    { name: 'PROFILE', icon: StarIcon, href: '#', current: currentPage === 'PROFILE' },
    { name: 'Test Plan Example', icon: HomeIcon, href: '#', current: currentPage === 'Test Plan Example' },
    { name: 'Test Case Example', icon: UsersIcon, href: '#', current: currentPage === 'Test Case Example' },
    { name: 'Test Report Example', icon: CalendarIcon, href: '#', current: currentPage === 'Test Report Example' },
    { name: 'Projects', icon: FolderIcon, href: '#', current: currentPage === 'Projects' },
    { name: 'Documents', icon: DocumentIcon, href: '#', current: currentPage === 'Documents' },
    { name: 'Reports', icon: ChartBarIcon, href: '#', current: currentPage === 'Reports' },
  ];

  return (
    <>
      {/* Sidebar สำหรับ Mobile */}
      <div 
        className={`fixed inset-y-0 z-50 flex sm:hidden transition duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="w-64 flex flex-col bg-white border-r border-gray-200">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="-m-2 p-2 text-gray-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`?page=${item.name}`} // แก้ไขตรงนี้ให้ใช้ URL
                  onClick={(e) => {
                    e.preventDefault(); // ป้องกันการเปลี่ยนหน้าแบบปกติ
                    setCurrentPage(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md group ${
                    item.current
                      ? 'bg-gray-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 mr-3 ${
                      item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </a>
              ))}
            </nav>
            {/* ... ส่วน Teams และ Settings ที่เหลือ */}
          </div>
        </div>
      </div>
      
      {/* Sidebar สำหรับ Desktop */}
      <div className="hidden sm:flex flex-col w-64 h-screen bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-16 p-4 border-b border-gray-200">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m14-8a7 7 0 10-14 0h14z" />
          </svg>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => (
            <a key={item.name} 
               href={`?page=${item.name}`} // แก้ไขตรงนี้
               onClick={(e) => {
                 e.preventDefault(); // ป้องกันการเปลี่ยนหน้าแบบปกติ
                 setCurrentPage(item.name);
               }}
               className={`flex items-center px-4 py-2 text-sm font-medium rounded-md group ${item.current ? 'bg-gray-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>
              <item.icon className={`w-6 h-6 mr-3 ${item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
              {item.name}
            </a>
          ))}
        </nav>
        {/* ... ส่วน Teams และ Settings ที่เหลือ */}
      </div>
    </>
  );
};

export default Sidebar;