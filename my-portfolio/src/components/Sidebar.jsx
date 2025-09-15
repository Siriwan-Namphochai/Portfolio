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
  StarIcon,
  XMarkIcon // เพิ่มไอคอน X เพื่อใช้เป็นปุ่มปิดเมนู
} from '@heroicons/react/24/outline';

const teams = [
  { initial: 'H', name: 'Heroicons' },
  { initial: 'T', name: 'Tailwind Labs' },
  { initial: 'W', name: 'Workcation' },
];

// รับ isMobileMenuOpen และ setIsMobileMenuOpen เข้ามาใน props
const Sidebar = ({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) => { 
  const navigation = [
    { name: 'Portfolio', icon: StarIcon, href: '#', current: currentPage === 'Portfolio' },
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: currentPage === 'Dashboard' },
    { name: 'Team', icon: UsersIcon, href: '#', current: currentPage === 'Team' },
    { name: 'Projects', icon: FolderIcon, href: '#', current: currentPage === 'Projects' },
    { name: 'Calendar', icon: CalendarIcon, href: '#', current: currentPage === 'Calendar' },
    { name: 'Documents', icon: DocumentIcon, href: '#', current: currentPage === 'Documents' },
    { name: 'Reports', icon: ChartBarIcon, href: '#', current: currentPage === 'Reports' },
  ];

  return (
    <>
      {/* Sidebar สำหรับ Mobile - แสดงเมื่อเมนูเปิด */}
      <div 
        className={`fixed inset-y-0 z-50 flex sm:hidden transition duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="w-64 flex flex-col bg-white border-r border-gray-200">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="-m-2 p-2 text-gray-500"
              onClick={() => setIsMobileMenuOpen(false)} // ปุ่มปิดเมนู
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* โค้ดเมนู sidebar */}
            <nav className="flex-1 px-2 py-4 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  onClick={() => {
                    setCurrentPage(item.name);
                    setIsMobileMenuOpen(false); // ปิดเมนูเมื่อเลือกเมนูแล้ว
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
        </div>
      </div>
      
      {/* Sidebar สำหรับ Desktop - แสดงบนหน้าจอ sm: ขึ้นไป */}
      <div className="hidden sm:flex flex-col w-64 h-screen bg-white border-r border-gray-200">
        {/* คัดลอกโค้ด sidebar เดิมมาใส่ที่นี่ */}
        <div className="flex items-center justify-center h-16 p-4 border-b border-gray-200">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m14-8a7 7 0 10-14 0h14z" />
          </svg>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
          {navigation.map((item) => (
            <a key={item.name} href="#" onClick={() => setCurrentPage(item.name)} className={`flex items-center px-4 py-2 text-sm font-medium rounded-md group ${item.current ? 'bg-gray-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>
              <item.icon className={`w-6 h-6 mr-3 ${item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
              {item.name}
            </a>
          ))}
        </nav>
        <div className="px-2 py-4 border-t border-gray-200">
          <h3 className="px-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">Your teams</h3>
          <ul className="mt-2 space-y-1">
            {teams.map((team, index) => (
              <li key={index}>
                <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900">
                  <span className="flex items-center justify-center w-6 h-6 mr-3 text-xs font-semibold text-gray-500 uppercase bg-gray-100 rounded-full">{team.initial}</span>
                  {team.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-2 py-4 border-t border-gray-200">
          <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-md group hover:bg-gray-100 hover:text-gray-900">
                <Cog6ToothIcon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-gray-500" />
                Settings
              </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;