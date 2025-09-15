// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="h-full bg-white border border-gray-200 border-dashed rounded-lg" />
        </main>
      </div>
    </div>
  );
}

export default App;