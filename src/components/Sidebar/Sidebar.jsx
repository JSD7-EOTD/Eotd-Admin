import React from "react";
import { Link } from "react-router-dom";
import "boxicons";

const Sidebar = () => {
  return (
    <div class="flex flex-col pt-7 gap-5 w-[300px] max-w-xs h-screen bg-white shadow rounded">
      {/* OrderManagement */}
      <Link to={"/orderManagement"} style={{ textDecoration: "none" }}>
        <div class="flex items-center  justify-start m-0 mx-5 p-1.5 px- rounded-md bg-gray-200 gap-5 cursor-pointer">
          <box-icon name="cart-add"></box-icon>
          <p>Order Management</p>
        </div>
      </Link>
      {/* Customers */}
      <Link to={"/customers"} style={{ textDecoration: "none" }}>
        <div class="flex items-center  justify-start m-0 mx-5 p-1.5 px-2.5 rounded-md bg-gray-200 gap-5 cursor-pointer">
          <box-icon name="user-circle"></box-icon>
          <p>Customers</p>
        </div>
      </Link>
      {/* Transaction */}
      <Link to={"/transaction"} style={{ textDecoration: "none" }}>
        <div class="flex items-center  justify-start m-0 mx-5 p-1.5 px-2.5 rounded-md bg-gray-200 gap-5 cursor-pointer">
          <box-icon name="spreadsheet"></box-icon>
          <p>Transaction</p>
        </div>
      </Link>
      {/* Add Product  */}
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div class="flex items-center justify-start m-0 mx-5 p-1.5 px-2.5 rounded-md bg-gray-200 gap-5 cursor-pointer">
          <box-icon name="add-to-queue"></box-icon>
          <p>Add Product</p>
        </div>
      </Link>
      {/* List Product  */}
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div class="flex items-center  justify-start m-0 mx-5 p-1.5 px-2.5 rounded-md bg-gray-200 gap-5 cursor-pointer">
          <box-icon name="list-ul"></box-icon>
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
