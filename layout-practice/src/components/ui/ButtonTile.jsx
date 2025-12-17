import React from "react";

function ButtonTile({ title }) {
  return (
    <div className="bg-[#272727] w-fit text-nowrap text-white font-bold px-4 py-1  rounded-md">
      {title}
    </div>
  );
}

export default ButtonTile;
