// src/App.jsx
import React, { useState, useEffect } from 'react';
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
  // ดึงค่า page จาก URL เป็นค่าเริ่มต้น
  const [currentPage, setCurrentPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('page') || 'PROFILE'; // ตั้งค่าเริ่มต้นเป็น 'PROFILE' ถ้าไม่มีใน URL
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect เพื่ออัปเดต URL เมื่อ currentPage เปลี่ยน
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('page', currentPage);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  }, [currentPage]); // ให้ทำงานเมื่อ currentPage มีการเปลี่ยนแปลง

  const renderPage = () => {
    switch (currentPage) {
      case 'PROFILE':
        return <PROFILE />;
      case 'Test Plan Example':
        return <Dashboard />;
      case 'Test Case Example':
        return <Team />;
      case 'Test Report Example':
        return <Calendar />;
      case 'Projects':
        return <Projects />;
      case 'Documents':
        return <Documents />;
      case 'Certificate':
        return <Reports />;
      default:
        return <PROFILE />; // เปลี่ยนจาก Dashboard เป็น PROFILE
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <div className="flex flex-col flex-1">
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