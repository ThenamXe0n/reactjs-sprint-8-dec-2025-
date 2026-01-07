import React from "react";

function ProductCard({
  poster = "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  productname = "wooden table",
  category = "furniture",
  price = 2000,
  mrp = 2500,
}) {
  return (
    <div className="shadow-lg rounded-md p-5 max-h-72">
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src={poster}
          alt="productimage"
        />
      </div>
      <div className="h-2/5 p-2">
        <p className="font-bold">{productname} </p>
        <p className="text-xs">{category} </p>
        <div className="text-xs space-x-3 font-semibold">
          <span>${price}</span>
          <del>${mrp}</del>{" "}
        </div>
        <button className="bg-black text-white px-6 py-1 rounded-md">
          Buy now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
