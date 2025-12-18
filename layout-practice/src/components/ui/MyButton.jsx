import React from "react";

function MyButton({
  title,
  icon,
  bgcolor = "bg-neutral-700",
  fontcolor = "white",
}) {
  return (
    <div
      className={` capitalize flex items-center gap-x-1 justify-center w-full  font-bold px-3 py-1  rounded-full ${bgcolor} ${fontcolor}`}
    >
      {icon}
      {title}
    </div>
  );
}

export default MyButton;
