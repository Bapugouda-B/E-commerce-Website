import React from "react";

function ProductCarousel({ product }) {
  return (
    <div className="border flex flex-col bg-white rounded-xl shadow-xl overflow-hidden items-center w-[15rem] cursor-pointer mx-3 ">
      <div className="h-[16rem] w-full">
        <img
          className="object-cover object-top w-full h-full"
          src={product.image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-600">{product.title}</p>
      </div>
    </div>
  );
}

export default ProductCarousel;
