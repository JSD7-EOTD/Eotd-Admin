import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:8000/delete", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Conent-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
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
        {allproducts.map((product, index) => {
          return (
            <>
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
                  className="cursor-pointer mx-auto"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
