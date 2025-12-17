import { BellIcon, Mic, Search } from "lucide-react";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import MyButton from "./ui/MyButton";
import { GoPlus } from "react-icons/go";

function NavBar() {
  return (
    <header className=" flex items-center h-fit justify-between  p-2">
      {/* // logocontainer */}
      <div className="text-white flex items-center gap-x-1">
        <BsYoutube color="red" size={28} />{" "}
        <span className="font-semibold">YouTube</span>
        <sup>IN</sup>
      </div>

      {/* //search container */}
      <div className="flex gap-x-2  min-w-lg items-center">
        {/* //searchbar */}
        <div className="border flex-1 flex items-stretch border-white/30 rounded-full">
          <input placeholder="Search" className="px-4 flex-1 py-1 outline-none" />
          <div className="bg-white/30 flex items-center pl-4 pr-3 rounded-tr-full rounded-br-full">
            <Search />
          </div>
        </div>
        {/* //mic button  */}
        <div className="bg-white/30  rounded-full p-1 ">
            <Mic/>
        </div>
      </div>

      {/* {profile buttons } */}
      <div className="flex items-center gap-x-2">
        <MyButton title={"Create"} icon={<GoPlus size={26} color="white"/>}/>
        <BellIcon/>
        <img src="" alt="profile" className="size-10 rounded-full border-2 border-white"/>
      </div>
    </header>
  );
}

export default NavBar;
