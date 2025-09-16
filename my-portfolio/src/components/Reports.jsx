// src/components/Reports.jsx
import React, { useState } from 'react';
import EducationCert from '../assets/CertPic/EducationCert.jpg';
import CiscoCert from '../assets/CertPic/CISCO.jpg';
import ITPECert from '../assets/CertPic/ITPE.jpg';

const Reports = () => {
  const allReports = [
    { 
      id: 'EducationCert', 
      name: 'ใบรับรองการศึกษา', 
      src: EducationCert 
    },
    { 
      id: 'CiscoCert', 
      name: 'Engaging Stakeholders for Success', 
      src: CiscoCert
    },
    { 
      id: 'ITPECert', 
      name: 'ITPE', 
      description: 'ITPE คือใบรับรองความสามารถด้านเทคโนโลยีสารสนเทศที่ออกโดยญี่ปุ่นเพื่อวัดทักษะพื้นฐานและช่วยส่งเสริมอาชีพในสายงานไอที',
      src: ITPECert
    },
  ];

  // ใช้ state เพื่อเก็บ id ของรายงานที่ถูกเลือก
  const [selectedReportId, setSelectedReportId] = useState(allReports[0].id);

  // หาข้อมูลรายงานที่ตรงกับ id ที่ถูกเลือก
  const selectedReport = allReports.find(
    (report) => report.id === selectedReportId
  );

  return (
    <div className="p-8 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">REPORTS</h2>
      <p className="mt-2 text-gray-600">เลือกรายงานที่คุณต้องการแสดง</p>

      {/* Dropdown Menu */}
      <div className="mt-4 mb-8">
        <select
          value={selectedReportId}
          onChange={(e) => setSelectedReportId(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          {allReports.map((report) => (
            <option key={report.id} value={report.id}>
              {report.name}
            </option>
          ))}
        </select>
      </div>

      {/* แสดงข้อมูลตามรายงานที่ถูกเลือก */}
      <div className="mt-8">
        {selectedReport ? (
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <p className="mt-2 text-gray-600">{selectedReport.description}</p>
            
            {selectedReport.src && (
              <img 
                src={selectedReport.src} 
                alt={selectedReport.description} 
                className="w-full h-auto mt-4 rounded-md" 
              />
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500">ไม่พบข้อมูลรายงานที่เลือก</p>
        )}
      </div>
    </div>
  );
};

export default Reports;