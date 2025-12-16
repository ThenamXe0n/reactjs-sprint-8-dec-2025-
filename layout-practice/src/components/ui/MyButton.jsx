import React from "react";

function MyButton({ title, icon }) {
  return (
    <div className="bg-neutral-400 capitalize flex items-center gap-x-2 justify-center w-fit text-white font-bold px-4 py-1  rounded-full">
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default MyButton;
