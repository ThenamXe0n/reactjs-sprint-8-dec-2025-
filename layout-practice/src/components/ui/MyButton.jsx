import React from "react";

function MyButton({ title, icon }) {
  return (
    <div className="bg-neutral-700 capitalize flex items-center gap-x-1 justify-center w-fit text-white font-bold px-3 py-1  rounded-full">
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default MyButton;
