import React from "react";
import { BsPlayBtn } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { TiHome } from "react-icons/ti";

function SideBar() {
  return (
    <aside className=" w-fit h-screen p-4 space-y-12">
      <IoMenuOutline size={30} />
      <div className="space-y-4">
        <TiHome size={30} />
        <SiYoutubeshorts size={30} />
        <BsPlayBtn size={30} />
        <FaRegCircleUser size={30} />
      </div>
    </aside>
  );
}

export default SideBar;
