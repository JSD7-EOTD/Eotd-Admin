import React, { useState } from "react";
import axios from "axios";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "Toys",
    new_price: "",
    description: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let product = { ...productDetails };

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    let formData = new FormData();
    formData.append("product", image);

    try {
      const uploadResponse = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          Accept: "application/json",
        },
      });

      const responseData = uploadResponse.data;

      if (responseData.success) {
        product.image = responseData.Image_url; // Use the correct key from the response
        console.log(product);

        const productResponse = await axios.post("http://localhost:8000/", product, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      }
      alert('add product')
      setProductDetails({
        name: "",
        image: "",
        category: "Toys",
        new_price: "",
        description: "",
        old_price: "",
      })
      setImage(null)

    } catch (error) {
      console.error("There was an error!", error);
      alert("An error occurred. Please check the console for details.");
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-[1000px] p-8 px-12 m-5 mx-7 rounded-md bg-white box-border">
      {/* Product Title */}
      <div className="flex flex-col gap-5 w-full text-gray-500 text-base">
        <p className="text-2xl text-black">Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
          className="bg-white box-border w-full h-[59px] rounded-[4px] pl-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]"
        />
      </div>

      {/* Price */}
      <div className="flex gap-10">
        <div className="flex flex-col gap-5 w-full text-gray-500 text-base">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
            className="bg-white box-border w-full h-[59px] rounded-[4px] pl-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]"
          />
        </div>
        <div className="flex flex-col gap-5 w-full text-gray-500 text-base">
          <p>Description</p>
          <input
            value={productDetails.description}
            onChange={changeHandler}
            type="text"
            name="description"
            placeholder="Type here"
            className="bg-white box-border w-full h-[59px] rounded-[4px] pl-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]"
          />
        </div>
        <div className="flex flex-col gap-5 w-full text-gray-500 text-base">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
            className="bg-white box-border w-full h-[59px] rounded-[4px] pl-4 border border-[#c3c3c3] outline-none text-[#7b7b7b] text-[14px]"
          />
        </div>
      </div>

      {/* Product Category */}
      <div className="w-full text-gray-500 text-base">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="bg-white p-2 w-full max-w-[200px] h-[50px] text-[14px] text-[#7b7b7b] border border-[#7b7b7b8d] rounded-[4px]"
        >
          <option value="Toys">Toys</option>
          <option value="Towers">Towers</option>
          <option value="Toilets">Toilets</option>
          <option value="Feeder">Feeder</option>
        </select>
      </div>

      {/* Add Product Image Field */}
      <div className="flex flex-col items-start">
        <label htmlFor="file-input" className="cursor-pointer">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="Upload Area"
            className="h-[120px] w-[120px] rounded-[10px] my-[10px] mx-0 object-contain"
          />
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </label>
      </div>

      {/* Add Button */}
      <button
        onClick={Add_Product}
        className="mt-5 w-[160px] h-[50px] rounded-[6px] bg-[#bd8356] border-none cursor-pointer text-white text-[16px] font-medium relative overflow-hidden transition-transform duration-300 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
      >
        ADD
        <span className="absolute inset-0 bg-[#794222] opacity-0 transition-opacity duration-300 ease-out hover:opacity-30"></span>
      </button>
    </div>
  );
};

export default AddProduct;
