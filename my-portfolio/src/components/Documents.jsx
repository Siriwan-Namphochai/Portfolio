// src/components/Documents.jsx
import React, { useState } from 'react';
import SDLPic from '../assets/DocumentsPic/SDL.png';
import STLCPic from '../assets/DocumentsPic/STLC.png';

const Documents = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const sections = [
    {
      title: '1. พื้นฐานเกี่ยวกับการทดสอบซอฟต์แวร์',
      content: (
        <>
          <h3 className="text-lg font-medium text-gray-700">หลักการและกระบวนการ (Principles and Processes):</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>ทบทวนแนวคิดพื้นฐานของการทดสอบซอฟต์แวร์ เช่น SDLC, STLC</li>
            <ul className="list-none mt-2"> {/* **นี่คือการแก้ไขหลัก: ลบคลาส `md:ml-8` ออก** */}
              <li>**SDLC** ย่อมาจาก Software Development Life Cycle (วงจรชีวิตการพัฒนาซอฟต์แวร์)</li>
              <div className="flex justify-center my-4">
                <img
                  className="max-w-full md:max-w-lg h-auto border-4 border-white shadow-md"
                  src={SDLPic}
                  alt="Software Development Life Cycle diagram"
                />
              </div>
            </ul>
            <ul className="list-none mt-4"> {/* **และที่นี่ด้วย: ลบคลาส `md:ml-8` ออก** */}
              <li>**STLC** ย่อมาจาก Software Testing Life Cycle (วงจรชีวิตการทดสอบซอฟต์แวร์)</li>
              <div className="flex justify-center my-4">
                <img
                  className="max-w-full md:max-w-lg h-auto border-4 border-white shadow-md"
                  src={STLCPic}
                  alt="Software Testing Life Cycle diagram"
                />
              </div>
            </ul>
            <li>ประเภทของการทดสอบต่างๆ เช่น Functional Testing, Non-functional Testing (Performance, Security, Usability), Regression Testing, Smoke Testing, Sanity Testing และ User Acceptance Testing (UAT)</li>
          </ul>
          <h3 className="text-lg font-medium text-gray-700 mt-4">Methodologies:</h3>
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
            <li>ทำความเข้าใจกับระเบียบวิธีต่างๆ ที่ใช้ในการพัฒนาซอฟต์แวร์ โดยเฉพาะ **Agile** (Scrum, Kanban)</li>
          </ul>
        </>
      ),
    },
    {
      title: '2. ทักษะทางเทคนิค (Technical Skills)',
      content: (
        <>
          <h3 className="text-lg font-medium text-gray-700">การทดสอบด้วยตัวเอง (Manual Testing):</h3>
          <h3 className="text-lg font-medium text-gray-700 mt-4">เครื่องมือทดสอบอัตโนมัติ (Automated Testing Tools):</h3>
          <h3 className="text-lg font-medium text-gray-700 mt-4">ระบบจัดการการทดสอบและติดตามข้อบกพร่อง (Test Management and Defect Tracking Systems):</h3>
        </>
      ),
    },
    {
      title: '3. ทักษะด้านการสื่อสารและการแก้ปัญหา (Soft Skills)',
      content: (
        <>
          <h3 className="text-lg font-medium text-gray-700">ทักษะการวิเคราะห์และใส่ใจในรายละเอียด (Analytical Skills and Attention to Detail):</h3>
          <h3 className="text-lg font-medium text-gray-700 mt-4">การสื่อสาร (Communication Skills):</h3>
          <h3 className="text-lg font-medium text-gray-700 mt-4">การแก้ปัญหา (Problem-solving Mindset):</h3>
        </>
      ),
    }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-gray-800">Software Tester</h2>

      <div className="mt-6 space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-md transition duration-200 ease-in-out flex justify-between items-center"
            >
              <h3 className="text-lg font-medium text-gray-800">{section.title}</h3>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  openSection === section.title ? 'transform rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                openSection === section.title ? 'max-h-screen p-4' : 'max-h-0'
              }`}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;