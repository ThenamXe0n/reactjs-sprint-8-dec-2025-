import React from "react";

function ButtonTile({ title }) {
  return (
    <div className="bg-neutral-400 w-fit text-white font-bold px-4 py-1  rounded-md">
      {title}
    </div>
  );
}

export default ButtonTile;
