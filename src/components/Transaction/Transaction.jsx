import React, { useState } from "react";
import "boxicons";

const TransactionManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const transactions = [
    {
      id: "#1234",
      name: "คุณแม็ค",
      amount: "$500",
      date: "10 July 2023",
      status: "Completed",
    },
    {
      id: "#5678",
      name: "คุณอ้วน ji ka la",
      amount: "$200",
      date: "12 July 2023",
      status: "Pending",
    },

    {
      id: "#5679",
      name: "คุณอาย",
      amount: "$200",
      date: "12 July 2023",
      status: "Pending",
    },
    {
      id: "#5680",
      name: "คุณบิว",
      amount: "$25",
      date: "12 July 2023",
      status: "Cancelled",
    },

    {
      id: "#5681",
      name: "cat puy puy",
      amount: "$25",
      date: "12 July 2023",
      status: "panding",
    },
    // เพิ่มรายการธุรกรรมอื่นๆ ที่นี่
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus ? transaction.status === filterStatus : true)
    );
  });

  return (
    <div className="w-[1140px] h-screen p-4 bg-zinc-100">
      <div className="flex flex-col gap-4">
        <div className="text-gray-500 text-center text-3xl">
          <h1>Transaction </h1>
        </div>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by name"
            className="px-4 py-2 border rounded-l-md focus:outline-none focus:border-[#d4a373] "
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="bg-white flex items-center px-4 border rounded-r-md">
            <box-icon name="search" color="gray"></box-icon>
          </div>
        </div>
        <div className="flex flex-wrap space-x-2 mb-4">
          {["All", "Pending", "Completed", "Cancelled"].map((status, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md shadow-sm transition-all duration-300 ${
                filterStatus === status || (status === "All" && !filterStatus)
                  ? "bg-[#d4a373] text-white"
                  : "bg-white text-[#d4a373] border border-[#d4a373]"
              }`}
              onClick={() => handleFilterChange(status === "All" ? "" : status)}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-md shadow-md">
            <thead className="bg-[#d4a373] text-white">
              <tr>
                <th className="py-2 px-4 text-left">Transaction ID</th>
                <th className="py-2 px-4 text-left">Customer Name</th>
                <th className="py-2 px-4 text-right">Total Amount</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-2 px-4 text-left">{transaction.id}</td>
                  <td className="py-2 px-4 text-left">{transaction.name}</td>
                  <td className="py-2 px-4 text-right">{transaction.amount}</td>
                  <td className="py-2 px-4 text-left">{transaction.date}</td>
                  <td className="py-2 px-4 text-center">
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-2 px-4">
                  Showing {filteredTransactions.length} of {transactions.length}
                </td>
                <td colSpan="4"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionManagement;
