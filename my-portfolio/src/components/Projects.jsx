// src/components/Projects.jsx
import React, { useState } from 'react';
import projectImage1 from '../assets/COD2.png';
import projectImage2 from '../assets/ระบบลงทะเบียน.png';
import projectImage3 from '../assets/SMART CARD.png';

const Projects = () => {

  const allProjects = [
    { id: 'cod', name: 'ระบบ COD', src: projectImage1, alt: 'ตรวจสอบระบบ COD (Cash on Delivery)' },
    { id: 'orders', name: 'ระบบลงทะเบียน_COD', src: projectImage2, alt: 'ตรวจสอบหน้าลงทะเบียน_COD' },
    { id: 'react', name: 'ตรวจสอบโปรแกรมสำหรับผลิตบัตร (Windows App)', src: projectImage3, alt: 'CARD' },
  ];

  // ใช้ state เพื่อเก็บ id ของโปรเจกต์ที่ถูกเลือก
  const [selectedProjectId, setSelectedProjectId] = useState(allProjects[0].id);

  // หาข้อมูลโปรเจกต์ที่ตรงกับ id ที่ถูกเลือก
  const selectedProject = allProjects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <div className="p-8 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">PROJECTS</h2>
      <p className="mt-2 text-gray-600">เลือกโปรเจกต์ที่คุณต้องการแสดง</p>
      
      {/* Dropdown Menu */}
      <div className="mt-4 mb-8">
        <select
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          {allProjects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>

      {/* แสดงรูปภาพตามโปรเจกต์ที่ถูกเลือก */}
      <div className="mt-8">
        {selectedProject ? (
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <img 
              src={selectedProject.src} 
              alt={selectedProject.alt} 
              className="w-full h-auto rounded-md" 
            />
            <p className="mt-4 text-center text-xl font-medium text-gray-700">{selectedProject.alt}</p>
          </div>
        ) : (
          <p className="text-center text-gray-500">ไม่พบข้อมูลโปรเจกต์ที่เลือก</p>
        )}
      </div>
    </div>
  );
};

export default Projects;