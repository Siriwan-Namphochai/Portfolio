// src/components/Portfolio.jsx
import React from 'react';
import profileImage from '../assets/Image.jpg';
import { BriefcaseIcon, AcademicCapIcon, UserIcon, WrenchScrewdriverIcon, StarIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Profile & Contact Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col items-center space-x-0 md:flex-row md:space-x-6 md:items-start">
          
          {/* ส่วนของรูปโปรไฟล์ */}
          <img 
            className="h-96 w-96  object-cover border-4 border-white shadow-md"
            src={profileImage}
            alt="Siriwan Namphochai"
          />
          {/* ส่วนของข้อมูลส่วนตัว */}
          <div className="mt-4 text-center md:mt-0 md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">Siriwan Namphochai</h1>
            <p className="text-sm font-medium text-blue-600 mt-1">IT Quality Assurance</p>
            <div className="mt-2 text-gray-500 text-sm space-y-1">
              <p>Lasalle Soi 20, Bangna, Bangkok, Thailand</p>
              <p>Email: <a href="mailto:Siriwann746@gmail.com" className="hover:underline">Siriwann746@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/Siriwan-Namphochai" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Siriwan-Namphochai</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
          <UserIcon className="h-6 w-6 mr-2 text-blue-500" />
          Profile Summary
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          I'm a passionate Software Tester with 2 years and 5 months of experience. I have a strong understanding of the Software Testing Life Cycle (STLC) and end-to-end testing processes. I enjoy planning, designing, and executing thorough test cases to ensure that software is high-quality, meets all requirements, and is bug-free. I take pride in proactively identifying and tracking defects and thrive on collaborating with development teams to deliver reliable, efficient, and user-friendly products.
        </p>
      </div>

      {/* Experience Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
          <BriefcaseIcon className="h-6 w-6 mr-2 text-blue-500" />
          Experience
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-bold text-gray-900">IT Quality Assurance</h3>
            <p className="text-blue-600">Plus Tech Innovation Public Company Limited</p>
            <p className="text-gray-500">2023 - Present</p>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
              <li>Created test cases and executed manual tests based on requirements.</li>
              <li>Managed test data for diverse testing scenarios.</li>
              <li>Prepared user manuals and program documentation.</li>
              <li>Collaborated with business analysts to test within a defined scope.</li>
              <li>Summarized and documented test results with precision.</li>
              <li>Participated in QA test case reviews.</li>
              <li>Supported and coordinated User Acceptance Testing (UAT) activities.</li>
              <li>Conducted testing of the COD system for SABUY SPEED.</li>
              <li>Performed API testing using Postman.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
          <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-500" />
          Education
        </h2>
        <div className="text-sm">
          <h3 className="font-bold text-gray-900">Bachelor's Degree in Engineering (B.Eng.)</h3>
          <p className="text-gray-600">Suranaree University of Technology</p>
          <p className="text-gray-500 mt-1">Major: Computer Engineering</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
          <WrenchScrewdriverIcon className="h-6 w-6 mr-2 text-blue-500" />
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="bg-gray-100 p-3 rounded-lg flex-1 min-w-[200px]">
            <h4 className="font-semibold text-gray-700">Testing</h4>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
              <li>Manual Testing</li>
              <li>Functional & Non-Functional Testing</li>
              <li>Creating Test Cases, Test Scripts, Test Scenarios</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg flex-1 min-w-[200px]">
            <h4 className="font-semibold text-gray-700">Tools & Platforms</h4>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
              <li>SQL Server</li>
              <li>Microsoft Office</li>
              <li>JIRA</li>
              <li>Postman</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg flex-1 min-w-[200px]">
            <h4 className="font-semibold text-gray-700">Other Skills</h4>
            <ul className="mt-2 list-disc list-inside text-gray-600 space-y-1">
              <li>Agile/Scrum</li>
              <li>Teamwork</li>
              <li>Critical Thinking</li>
              <li>Languages: English, Thai</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;