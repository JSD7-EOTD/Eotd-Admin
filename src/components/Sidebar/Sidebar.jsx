import React from "react";
import { Link } from "react-router-dom";
import "boxicons";

const Sidebar = () => {
  return (
    <div className="flex flex-col pt-7 gap-5 w-[300px] max-w-xs h-screen bg-gray-200">
      {/* OrderManagement */}
      <Link to={"/orderManagement"} style={{ textDecoration: "none" }}>
        <div className="flex items-center  justify-start m-0 mx-5 p-1.5 px- rounded-md bg-[#bd8356] gap-5 cursor-pointer  text-black">
          <box-icon name="cart-add"></box-icon>
          <p>Order Management</p>
        </div>
      </Link>
      {/* Customers */}
      <Link to={"/customers"} style={{ textDecoration: "none" }}>
        <div className="flex items-center  justify-start m-0 mx-5 p-1.5 px-2.5 rounded-md bg-[#bd8356] gap-5 cursor-pointer text-black">
          <box-icon name="user-circle"></box-icon>
          <p>Customers</p>
        </div>
      </Link>
      {/* Transaction */}
      <Link to={"/transaction"} style={{ textDecoration: "none" }}>
        <div className="flex items-center  justify-start m-0 mx-5 p-1.5 px-2.5 rounded-md bg-[#bd8356] gap-5 cursor-pointer  text-black">
          <box-icon name="spreadsheet"></box-icon>
          <p>Transaction</p>
        </div>
      </Link>
      {/* Add Product  */}
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-start m-0 mx-5 p-1.5 px-2.5 rounded-md bg-[#bd8356] gap-5 cursor-pointer  text-black">
          <box-icon name="add-to-queue"></box-icon>
          <p>Add Product</p>
        </div>
      </Link>
      {/* List Product  */}
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="flex items-center  justify-start m-0 mx-5 p-1.5 px-2.5 rounded-md bg-[#bd8356] gap-5 cursor-pointer  text-black">
          <box-icon name="list-ul"></box-icon>
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
