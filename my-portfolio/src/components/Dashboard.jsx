import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        
        <h1 className="text-3xl font-bold text-gray-800 border-b pb-4 mb-6">
          🧪 Test Plan: Swag Labs (saucedemo.com)
        </h1>
        <p className="text-gray-600 mb-6">
          เอกสารนี้จัดทำขึ้นเพื่อวางแผนและกำหนดขอบเขตการทดสอบฟังก์ชันการทำงานของเว็บไซต์ Swag Labs (saucedemo.com) เพื่อให้มั่นใจว่าระบบสามารถทำงานได้อย่างถูกต้องตามที่คาดหวัง
        </p>

        <hr className="my-6" />

        {/* Section 1: Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. บทนำ (Introduction)</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Project:</strong> Swag Labs Website Testing</li>
            <li><strong>Application Under Test (AUT):</strong> <code className="bg-gray-200 px-2 py-1 rounded text-sm">https://www.saucedemo.com/</code></li>
            <li><strong>Objective:</strong> ตรวจสอบและรับรองคุณภาพของฟังก์ชันการทำงานหลักในกระบวนการซื้อขายสินค้าบนเว็บไซต์ ตั้งแต่การล็อกอิน, การเลือกสินค้า, การจัดการตะกร้า, ไปจนถึงการชำระเงิน</li>
          </ul>
        </section>

        <hr className="my-6" />

        {/* Section 2: Scope */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. ขอบเขตการทดสอบ (Scope)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-2">✅ In-Scope (สิ่งที่อยู่ในขอบเขต)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Functional Testing (Login, Inventory, Cart, Checkout)</li>
                <li>UI/UX Testing (Visual Testing)</li>
                <li>Compatibility Testing (Chrome, Firefox, Edge)</li>
                <li>User Account Testing</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-2">❌ Out-of-Scope (สิ่งที่ไม่อยู่ในขอบเขต)</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Performance Testing</li>
                <li>Security Testing</li>
                <li>API Testing</li>
                <li>Database Testing</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-6" />

        {/* Section 3: Environment & Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. สภาพแวดล้อมและข้อมูลที่ใช้ทดสอบ (Test Environment & Data)</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>URL:</strong> <a href="https://www.saucedemo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.saucedemo.com/</a></li>
            <li><strong>Browsers:</strong> Chrome, Firefox, Edge (Latest Versions)</li>
            <li>
              <strong>Test Data (User Accounts):</strong>
              <ul className="list-circle list-inside ml-4 mt-2 space-y-1">
                <li><code className="bg-gray-200 px-2 py-1 rounded text-sm">standard_user</code> - ผู้ใช้ปกติ</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded text-sm">locked_out_user</code> - ผู้ใช้ที่ถูกล็อก</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded text-sm">problem_user</code> - ผู้ใช้ที่ทำให้เกิดปัญหา</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded text-sm">performance_glitch_user</code> - ผู้ใช้ที่ทำให้เว็บช้า</li>
              </ul>
            </li>
          </ul>
        </section>

        <hr className="my-6" />

        {/* Section 4: Test Cases */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. กรณีทดสอบ (Test Cases)</h2>
          
          {/* Module 1: Login */}
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Module 1: การเข้าสู่ระบบ (Login Page)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">ID</th>
                  <th className="py-2 px-4 border-b text-left">คำอธิบาย</th>
                  <th className="py-2 px-4 border-b text-left">ขั้นตอนการทดสอบ</th>
                  <th className="py-2 px-4 border-b text-left">ผลลัพธ์ที่คาดหวัง</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-mono">TC-LOGIN-001</td>
                  <td className="py-2 px-4 border-b"><strong>เข้าสู่ระบบสำเร็จ</strong> ด้วย `standard_user`</td>
                  <td className="py-2 px-4 border-b text-sm">1. ไปที่หน้า Login<br/>2. กรอก Username: `standard_user`<br/>3. กรอก Password: `secret_sauce`<br/>4. คลิกปุ่ม Login</td>
                  <td className="py-2 px-4 border-b text-sm">เข้าระบบสำเร็จและถูกพาไปยังหน้า Inventory</td>
                </tr>
                 <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-mono">TC-LOGIN-002</td>
                  <td className="py-2 px-4 border-b"><strong>เข้าสู่ระบบไม่สำเร็จ</strong> (รหัสผ่านผิด)</td>
                  <td className="py-2 px-4 border-b text-sm">1. ไปที่หน้า Login<br/>2. กรอก Username: `standard_user`<br/>3. กรอก Password: `wrong_password`<br/>4. คลิกปุ่ม Login</td>
                  <td className="py-2 px-4 border-b text-sm text-red-600">แสดงข้อความผิดพลาด "Username and password do not match..."</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-mono">TC-LOGIN-003</td>
                  <td className="py-2 px-4 border-b"><strong>ทดสอบผู้ใช้ที่ถูกล็อก</strong> (`locked_out_user`)</td>
                  <td className="py-2 px-4 border-b text-sm">1. ไปที่หน้า Login<br/>2. กรอก Username: `locked_out_user`<br/>3. กรอก Password: `secret_sauce`<br/>4. คลิกปุ่ม Login</td>
                  <td className="py-2 px-4 border-b text-sm text-red-600">แสดงข้อความผิดพลาด "Sorry, this user has been locked out."</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Module 2: Inventory */}
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Module 2: หน้าแสดงสินค้า (Inventory Page)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
               <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">ID</th>
                  <th className="py-2 px-4 border-b text-left">คำอธิบาย</th>
                  <th className="py-2 px-4 border-b text-left">ขั้นตอนการทดสอบ</th>
                  <th className="py-2 px-4 border-b text-left">ผลลัพธ์ที่คาดหวัง</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-mono">TC-INV-001</td>
                  <td className="py-2 px-4 border-b"><strong>เพิ่มสินค้า 1 ชิ้นลงตะกร้า</strong></td>
                  <td className="py-2 px-4 border-b text-sm">1. Login<br/>2. คลิก "Add to cart" ของสินค้าชิ้นแรก</td>
                  <td className="py-2 px-4 border-b text-sm">1. ปุ่มเปลี่ยนเป็น "Remove"<br/>2. ไอคอนตะกร้าแสดงเลข "1"</td>
                </tr>
                 <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-mono">TC-INV-002</td>
                  <td className="py-2 px-4 border-b"><strong>ทดสอบการเรียงลำดับสินค้า</strong></td>
                  <td className="py-2 px-4 border-b text-sm">1. Login<br/>2. เลือก Sort "Name (Z to A)"</td>
                  <td className="py-2 px-4 border-b text-sm">สินค้าถูกเรียงลำดับจาก Z ไป A</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Module 4: Checkout Process */}
          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Module 4: กระบวนการสั่งซื้อ (Checkout Process)</h3>
          <div className="overflow-x-auto">
             <table className="min-w-full bg-white border border-gray-300">
               <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">ID</th>
                  <th className="py-2 px-4 border-b text-left">คำอธิบาย</th>
                  <th className="py-2 px-4 border-b text-left">ขั้นตอนการทดสอบ</th>
                  <th className="py-2 px-4 border-b text-left">ผลลัพธ์ที่คาดหวัง</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-mono">TC-CHK-001</td>
                  <td className="py-2 px-4 border-b"><strong>สั่งซื้อสินค้าสำเร็จ</strong></td>
                  <td className="py-2 px-4 border-b text-sm">1. Login, เพิ่มสินค้า, ไปที่ Checkout<br/>2. กรอก First Name, Last Name, Postal Code<br/>3. กด Continue<br/>4. กด Finish</td>
                  <td className="py-2 px-4 border-b text-sm">แสดงหน้า "Checkout: Complete!"</td>
                </tr>
                 <tr className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b font-mono">TC-CHK-002</td>
                  <td className="py-2 px-4 border-b"><strong>กรอกข้อมูลไม่ครบ</strong></td>
                  <td className="py-2 px-4 border-b text-sm">1. Login, เพิ่มสินค้า, ไปที่ Checkout<br/>2. ไม่กรอก First Name<br/>3. กด Continue</td>
                  <td className="py-2 px-4 border-b text-sm text-red-600">แสดงข้อความผิดพลาด "Error: First Name is required"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="my-6" />

        {/* Section 5: Defect Reporting */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. การรายงานข้อบกพร่อง (Defect Reporting) 🐛</h2>
          <p className="text-gray-700 mb-2">ทุกข้อบกพร่อง (Bug/Defect) ที่พบจะถูกรายงานโดยมีรายละเอียดดังนี้:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 bg-gray-100 p-4 rounded-lg">
            <li><strong>Title:</strong> สรุปปัญหาที่พบอย่างชัดเจน</li>
            <li><strong>Steps to Reproduce:</strong> ขั้นตอนการทำให้เกิดปัญหาซ้ำ</li>
            <li><strong>Expected Result:</strong> ผลลัพธ์ที่ควรจะเป็น</li>
            <li><strong>Actual Result:</strong> ผลลัพธ์ที่เกิดขึ้นจริง</li>
            <li><strong>Severity/Priority:</strong> ระดับความรุนแรงและลำดับความสำคัญ</li>
            <li><strong>Attachment:</strong> ภาพหน้าจอ หรือวิดีโอประกอบ</li>
          </ul>
        </section>

        <hr className="my-6" />

        {/* Section 6: Exit Criteria */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. เกณฑ์การสิ้นสุดการทดสอบ (Exit Criteria)</h2>
          <p className="text-gray-700 mb-2">การทดสอบจะถือว่าเสร็จสิ้นเมื่อ:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Test Cases ทั้งหมดถูกดำเนินการครบ 100%</li>
            <li>ไม่มีข้อบกพร่องในระดับ Critical หรือ Blocker ที่ยังไม่ได้รับการแก้ไข</li>
            <li>ข้อบกพร่องในระดับ Major ที่ยังไม่ได้รับการแก้ไข ต้องได้รับการยอมรับจากผู้เกี่ยวข้อง</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Dashboard;