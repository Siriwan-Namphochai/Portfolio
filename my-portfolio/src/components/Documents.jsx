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
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-600">
            <li>ทบทวนแนวคิดพื้นฐานของการทดสอบซอฟต์แวร์ เช่น SDLC, STLC</li>
            <ol className="list-none ml-8">
                <li>SDLC ย่อมาจาก Software Development Life Cycle (วงจรชีวิตการพัฒนาซอฟต์แวร์)</li>
                <img 
                            className="h-96 w-96  object-cover border-4 border-white shadow-md"
                            src={SDLPic}
                            alt="Siriwan Namphochai"
                          />
            </ol>
            <ol className="list-none ml-8">
                <li>STLC ย่อมาจาก Software Testing Life Cycle (วงจรชีวิตการทดสอบซอฟต์แวร์) </li>
                <img 
                            className="h-96 w-96  object-cover border-4 border-white shadow-md"
                            src={STLCPic}
                            alt="Siriwan Namphochai"
                          />
            </ol>
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
          <p className="mt-2 ml-4 text-gray-600">
            เตรียมพร้อมที่จะอธิบายวิธีการทดสอบด้วยตัวเองที่คุณเคยใช้ เช่น การออกแบบ Test Case, การทำ Test Plan และการรายงานผลการทดสอบ
          </p>
          <h3 className="text-lg font-medium text-gray-700 mt-4">เครื่องมือทดสอบอัตโนมัติ (Automated Testing Tools):</h3>
          <p className="mt-2 ml-4 text-gray-600">
            อธิบายประสบการณ์ของคุณกับเครื่องมือต่างๆ เช่น **Selenium, Python, JavaScript** และอธิบายว่าคุณใช้เครื่องมือเหล่านี้อย่างไรในการเขียน Script หรือสร้าง Test Suite
          </p>
          <h3 className="text-lg font-medium text-gray-700 mt-4">ระบบจัดการการทดสอบและติดตามข้อบกพร่อง (Test Management and Defect Tracking Systems):</h3>
          <p className="mt-2 ml-4 text-gray-600">
            เตรียมตัวที่จะพูดถึงเครื่องมือที่คุณเคยใช้ เช่น Jira, TestRail, Asana หรือ Trello
          </p>
        </>
      ),
    },
    {
      title: '3. ทักษะด้านการสื่อสารและการแก้ปัญหา (Soft Skills)',
      content: (
        <>
          <h3 className="text-lg font-medium text-gray-700">ทักษะการวิเคราะห์และใส่ใจในรายละเอียด (Analytical Skills and Attention to Detail):</h3>
          <p className="mt-2 ml-4 text-gray-600">
            เตรียมยกตัวอย่างสถานการณ์ที่คุณเคยพบเจอในการทำงานจริง ที่คุณใช้ทักษะเหล่านี้ในการค้นหาข้อผิดพลาดที่ซับซ้อน หรือการวิเคราะห์สาเหตุของปัญหา
          </p>
          <h3 className="text-lg font-medium text-gray-700 mt-4">การสื่อสาร (Communication Skills):</h3>
          <p className="mt-2 ml-4 text-gray-600">
            อธิบายว่าคุณสื่อสารกับทีมพัฒนา (Developer), Product Owner และทีมอื่นๆ อย่างไร
          </p>
          <h3 className="text-lg font-medium text-gray-700 mt-4">การแก้ปัญหา (Problem-solving Mindset):</h3>
          <p className="mt-2 ml-4 text-gray-600">
            ยกตัวอย่างปัญหาที่คุณเคยเจอและอธิบายขั้นตอนที่คุณใช้ในการวิเคราะห์ หาสาเหตุ และแก้ไขปัญหานั้นให้สำเร็จ
          </p>
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