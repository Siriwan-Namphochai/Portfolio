import React from 'react';

const Calendar = () => {
  return (
    <div className="p-8">
      {/* Test Report - Swag Labs Website Testing */}
      <h2 className="text-2xl font-semibold text-gray-800">Test Report: Swag Labs Website Testing</h2>
      <div className="mt-4 text-gray-600 space-y-4">
        <p>
          <strong>Project Name:</strong> Swag Labs Website<br />
          <strong>Application URL:</strong> https://www.saucedemo.com/<br />
          <strong>Test Report ID:</strong> TR-SWAG-20250915-001<br />
          <strong>Report Date:</strong> 15 กันยายน 2568<br />
          <strong>Reported By:</strong> Siriwan Namphochai
        </p>

        {/* --- Test Execution Summary --- */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6">1. Test Execution Summary</h3>
        <p>การทดสอบได้ดำเนินการตาม Test Cases ที่กำหนดไว้ใน Test Plan ทั้งหมด 18 กรณี ผลลัพธ์โดยรวมเป็นที่น่าพอใจ โดยมีอัตราการผ่านอยู่ที่ 88.9%</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cases</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Passed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Failed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pass Rate (%)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr><td className="px-6 py-4 whitespace-nowrap">Login Page</td><td className="px-6 py-4 whitespace-nowrap">4</td><td className="px-6 py-4 whitespace-nowrap">4</td><td className="px-6 py-4 whitespace-nowrap">0</td><td className="px-6 py-4 whitespace-nowrap">100%</td></tr>
              <tr><td className="px-6 py-4 whitespace-nowrap">Inventory Page</td><td className="px-6 py-4 whitespace-nowrap">5</td><td className="px-6 py-4 whitespace-nowrap">4</td><td className="px-6 py-4 whitespace-nowrap">1</td><td className="px-6 py-4 whitespace-nowrap">80%</td></tr>
              <tr><td className="px-6 py-4 whitespace-nowrap">Shopping Cart</td><td className="px-6 py-4 whitespace-nowrap">3</td><td className="px-6 py-4 whitespace-nowrap">3</td><td className="px-6 py-4 whitespace-nowrap">0</td><td className="px-6 py-4 whitespace-nowrap">100%</td></tr>
              <tr><td className="px-6 py-4 whitespace-nowrap">Checkout Process</td><td className="px-6 py-4 whitespace-nowrap">3</td><td className="px-6 py-4 whitespace-nowrap">2</td><td className="px-6 py-4 whitespace-nowrap">1</td><td className="px-6 py-4 whitespace-nowrap">66.7%</td></tr>
              <tr><td className="px-6 py-4 whitespace-nowrap">General Functions</td><td className="px-6 py-4 whitespace-nowrap">3</td><td className="px-6 py-4 whitespace-nowrap">3</td><td className="px-6 py-4 whitespace-nowrap">0</td><td className="px-6 py-4 whitespace-nowrap">100%</td></tr>
              <tr className="bg-gray-100 font-semibold"><td className="px-6 py-4 whitespace-nowrap">Total</td><td className="px-6 py-4 whitespace-nowrap">18</td><td className="px-6 py-4 whitespace-nowrap">16</td><td className="px-6 py-4 whitespace-nowrap">2</td><td className="px-6 py-4 whitespace-nowrap">88.9%</td></tr>
            </tbody>
          </table>
        </div>

        {/* --- Defect Summary & Details --- */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6">2. Defect Summary & Details</h3>
        <p>จากการทดสอบพบข้อบกพร่อง (Bugs) ทั้งหมด 2 รายการ</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Defect ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Steps to Reproduce</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">BUG-001</td>
                <td className="px-6 py-4">Incorrect sorting for 'Price (high to low)'</td>
                <td className="px-6 py-4 whitespace-nowrap">Medium</td>
                <td className="px-6 py-4 whitespace-nowrap">Open</td>
                <td className="px-6 py-4">1. Log in.<br />2. Go to Inventory page.<br />3. Select "Price (high to low)".<br />**Actual:** Products remain sorted low to high.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">BUG-002</td>
                <td className="px-6 py-4">No error message for missing Postal Code</td>
                <td className="px-6 py-4 whitespace-nowrap">Low</td>
                <td className="px-6 py-4 whitespace-nowrap">Open</td>
                <td className="px-6 py-4">1. Go to checkout.<br />2. Leave "Postal Code" empty.<br />3. Click "Continue".<br />**Actual:** No error message is displayed.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- Conclusion & Recommendations --- */}
        <h3 className="text-xl font-semibold text-gray-700 mt-6">3. Conclusion & Recommendations</h3>
        <p>แอปพลิเคชันมีความเสถียรในฟังก์ชันหลัก แต่ยังมีข้อบกพร่อง 2 จุดที่ควรได้รับการแก้ไข</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li><strong>Go/No-Go Decision:</strong> Conditional Go (ไปต่อได้แบบมีเงื่อนไข)</li>
          <li><strong>Recommendation:</strong> แนะนำให้ทีมพัฒนาทำการแก้ไข BUG-001 เป็นลำดับแรก เนื่องจากมีผลกระทบต่อ User Experience โดยตรง</li>
          <li>หลังจากแก้ไขแล้ว ควรมีการทำ Regression Testing ในส่วนที่เกี่ยวข้องอีกครั้ง</li>
        </ul>
      </div>
    </div>
  );
};

export default Calendar;