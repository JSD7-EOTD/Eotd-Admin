import React from "react";
import "boxicons";

const OrderManagement = () => {
  return (
    <div className="w-[1140px] h-screen p-4 bg-zinc-100">
      <div className="flex flex-col gap-4">
        <div className="text-gray-500 text-center text-3xl">
          <h1>Order Management</h1>
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by order id"
            className="px-4 py-2 border rounded-l-md focus:outline-none focus:border-[#d4a373] "
          />
          <div className="bg-white flex items-center px-4 border rounded-r-md">
            <box-icon name="search" color="gray"></box-icon>
          </div>
        </div>
        <div className="flex flex-wrap space-x-2 mb-4">
          {[
            "Pending",
            "Confirmed",
            "Processing",
            "Picked",
            "Shipped",
            "Delivered",
            "Cancelled",
          ].map((status, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-[#d4a373] text-white rounded-md shadow-sm hover:bg-[#c68a55] transition-all duration-300"
            >
              {status}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-[#d4a373] text-white">
              <tr>
                <th className="py-2 px-4 text-left">ORDER ID</th>
                <th className="py-2 px-4 text-left">CREATED</th>
                <th className="py-2 px-4 text-left">CUSTOMER</th>
                <th className="py-2 px-4 text-right">TOTAL</th>
                <th className="py-2 px-4 text-right">PROFIT</th>
                <th className="py-2 px-4 text-center">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }, (_, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-2 px-4 text-left">#6548</td>
                  <td className="py-2 px-4 text-left">2 min ago</td>
                  <td className="py-2 px-4 text-left">Joseph Wheeler</td>
                  <td className="py-2 px-4 text-right">$654</td>
                  <td className="py-2 px-4 text-right">$154</td>
                  <td className="py-2 px-4 text-center">
                    <span className="text-green-500">16%</span>
                    <select className="ml-2 border rounded p-1 bg-white focus:border-[#d4a373]">
                      {[
                        "Pending",
                        "Confirmed",
                        "Processing",
                        "Picked",
                        "Shipped",
                        "Delivered",
                        "Cancelled",
                      ].map((status, idx) => (
                        <option key={idx} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-2 px-4">Showing 10 of 50</td>
                <td colSpan="4"></td>
                <td className="py-2 px-4 text-right">
                  <div className="flex justify-end space-x-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 bg-[#d4a373] text-white rounded-md shadow-sm hover:bg-[#c68a55] transition-all duration-300"
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
