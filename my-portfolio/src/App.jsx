// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Team from './components/Team';
import Projects from './components/Projects';
import Calendar from './components/Calendar';
import Documents from './components/Documents';
import Reports from './components/Reports';
import PROFILE from './components/Portfolio';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('PROFILE');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // เพิ่ม State สำหรับเมนูมือถือ

  const renderPage = () => {
    switch (currentPage) {
      case 'PROFILE':
        return <PROFILE />;
      case 'Test Plan Example':
        return <Dashboard  />;
      case 'Test Case Example':
        return <Team />;
      case 'Test Report Example':
        return <Calendar />;
      case 'Projects':
        return <Projects />;


      case 'Documents':
        return <Documents />;
      case 'Reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* ส่ง props ไปยัง Sidebar เพื่อควบคุมการแสดงผล */}
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <div className="flex flex-col flex-1">
        {/* ส่ง props ไปยัง Header เพื่อแสดงปุ่มเปิด-ปิดเมนู */}
        <Header 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
          isMobileMenuOpen={isMobileMenuOpen} 
        />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;