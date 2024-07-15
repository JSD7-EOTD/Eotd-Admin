import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../components/AddProduct/AddProduct";
import ListProduct from "../../components/ListProduct/ListProduct";
import OrderManagement from "../../components/OrderManagement/OrderManagement";
import Customers from "../../components/Customers/Customers";
import TransactionManagement from "../../components/Transaction/Transaction";

const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/orderManagement" element={<OrderManagement />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transaction" element={<TransactionManagement />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
