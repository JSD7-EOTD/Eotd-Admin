import React, { useEffect, useState } from "react";
import axios from "axios";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await axios.get("http://localhost:8000/Products");
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
      await axios.post("http://localhost:8000/delete", { id });
      fetchInfo();
    } catch (error) {
      console.error("Error removing the product", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-[1000px] p-8 px-12 m-5 mx-7 rounded-md bg-white box-border">
      <h1 className="text-2xl text-black">All Products List</h1>
      <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-2 w-full py-5 text-[#454545] text-[15px] font-semibold">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="overflow-y-auto">
        <hr />
        {allproducts.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-2 w-full py-5 text-[#454545] text-[15px] font-semibold items-center"
          >
            <img src={product.image} alt="" className="h-20" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img
              onClick={() => remove_product(product.id)}
              className="cursor-pointer mx-auto"
              src={cross_icon}
              alt=""
            />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
