import React from "react";
import NavbarOrder from "../NavbarOrder/NavbarOrder";

const OrderManagement = () => {
  return (
    <div className="p-4 text-gray-500">
      <NavbarOrder />

      {/* ปุ่มสำหรับตัวกรองคำสั่งซื้อ */}
      <div className="flex flex-wrap space-x-10 mb-4">
        <button className="border-b-2 border-blue-500 text-blue-500">
          Pending
        </button>
        <button>Confirmed</button>
        <button>Processing</button>
        <button>Picked</button>
        <button>Shipped</button>
        <button>Delivered</button>
        <button>Cancelled</button>
      </div>

      {/* ช่องกรอกข้อมูลสำหรับค้นหาตามรหัสคำสั่งซื้อ */}
      <input
        type="text"
        placeholder="Search by order id"
        className="border p-2 mb-4 w-full md:w-1/2"
      />

      {/* ตารางเพื่อแสดงรายละเอียดคำสั่งซื้อ */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 text-left">ORDER ID</th>
              <th className="py-2 text-left">CREATED</th>
              <th className="py-2 text-left">CUSTOMER</th>
              <th className="py-2 text-right">TOTAL</th>
              <th className="py-2 text-right">PROFIT</th>
              <th className="py-2 text-center">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* สร้างแถวในตารางเพื่อสาธิต */}
            {Array.from({ length: 10 }, (_, index) => (
              //แฟร์งใช้ Array.from ทำ demo ใว้ก่อน  เพื่อสร้างแถวที่มี 10 แถวโดยในแต่ละแถวจะมีตั้งแต่ 0 ถึง 9 สามารถเล่นได้งับ
              <tr key={index} className="border-b">
                <td className="py-2 text-left">#6548</td>
                <td className="py-2 text-left">2 min ago</td>
                <td className="py-2 text-left">Joseph Wheeler</td>
                <td className="py-2 text-right">$654</td>
                <td className="py-2 text-right">$154</td>
                <td className="py-2 text-center">
                  <span className="text-green-500">16%</span>
                  <select className="ml-2 border rounded p-1">
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Processing</option>
                    <option>Picked</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ส่วนของการแสดงผลหรือเลื่อนหน้า */}
      <div className="mt-4 flex flex-col md:flex-row justify-between">
        <div>Showing 10 of 50</div>
        <div className="flex space-x-2 mt-2 md:mt-0">
          <button className="p-2">1</button>
          <button className="p-2">2</button>
          <button className="p-2">3</button>
          <button className="p-2">4</button>
          <button className="p-2">5</button>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
