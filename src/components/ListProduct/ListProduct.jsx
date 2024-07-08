import React, { useEffect, useState } from "react";
import axios from "axios";
import cross_icon from "../../assets/cross_icon.png";
import edit from "../../assets/edit.png";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // เก็บข้อมูลผลิตภัณฑ์ที่ต้องการแก้ไข

  const fetchInfo = async () => {
    try {
      const response = await axios.get("https://structure-puey-puey.onrender.com/Products");
      setAllproducts(response.data);
    } catch (error) {
      console.error("Error fetching the products", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await axios.post("https://structure-puey-puey.onrender.com/delete", { id });
      fetchInfo();
    } catch (error) {
      console.error("Error removing the product", error);
    }
  };

  const edit_product = (product) => {
    setEditProduct(product); // ตั้งค่าให้แก้ไขผลิตภัณฑ์นี้
  };

  const update_product = async () => {
    try {
      // ส่งคำขอ PATCH ไปยังเซิร์ฟเวอร์
      await axios.patch(
        `https://structure-puey-puey.onrender.com/Products/${editProduct._id}`,
        editProduct
      );
      setEditProduct(null); // รีเซ็ตสถานะหลังจากการอัปเดตเสร็จ
      fetchInfo(); // โหลดข้อมูลใหม่หลังจากการอัปเดต
    } catch (error) {
      console.error("Error updating the product", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full p-8 px-12 m-5 mx-7 rounded-md bg-white box-border">
      <h1 className="text-2xl text-black">All Products List</h1>
      <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] gap-2 w-full py-5 text-[#454545] text-[15px] font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p className="flex justify-center items-center">Edit</p>
        <p className="flex justify-center items-center">Remove</p>
      </div>
      <div className="overflow-y-auto">
        <hr />
        {allproducts.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] gap-2 w-full py-5 text-[#454545] text-[15px] font-semibold items-center"
          >
            <img src={product.image} alt="" className="h-20" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img
              onClick={() => edit_product(product)}
              className="cursor-pointer mx-auto"
              src={edit}
              alt=""
            />
            <img
              onClick={() => remove_product(product.id)}
              className="cursor-pointer mx-auto"
              src={cross_icon}
              alt=""
            />
          </div>
        ))}
      </div>

      {editProduct && (
        <div className="flex flex-col gap-2 p-4 bg-gray-200 rounded-md">
          <h2 className="text-xl">Edit Product</h2>
          <input
            type="text"
            value={editProduct.name}
            onChange={(e) =>
              setEditProduct({ ...editProduct, name: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="text"
            value={editProduct.old_price}
            onChange={(e) =>
              setEditProduct({ ...editProduct, old_price: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="text"
            value={editProduct.new_price}
            onChange={(e) =>
              setEditProduct({ ...editProduct, new_price: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="text"
            value={editProduct.category}
            onChange={(e) =>
              setEditProduct({ ...editProduct, category: e.target.value })
            }
            className="p-2 border rounded"
          />
          <button
            onClick={update_product}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={() => setEditProduct(null)}
            className="p-2 bg-red-500 text-white rounded"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
