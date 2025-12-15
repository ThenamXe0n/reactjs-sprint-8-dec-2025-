import React from "react";
import ButtonOlivia from "./ui/ButtonOlivia";
import { IoMailOpenOutline } from "react-icons/io5";

const NavBarOlivia = () => {
  return (
    <header
      style={{border:"2px solid"}}
      className="w-[80vw] mx-auto bg-[#2d4d36] text-white  mt-4 top-0 left-1/2 -translate-x-1/2 p-3 justify-between items-center rounded-full flex"
    >
    
      <div id="logo" className="flex items-center gap-x-3">
        <div className="bg-[#ffa807] p-2 h-fit w-fit flex justify-center items-center rounded-full text-green-700 font-bold text-xl">
          O
        </div>
        <p className="text-xl font-semibold">Olivia</p>
      </div>

      <nav>
        <ul className="gap-x-8 md:flex hidden">
          <li className="hover:text-[#ffa807] hover:text-xl hover:underline animate-bounce">
            Home
          </li>
          <li>servies</li>
          <li>about</li>
          <li>blogs</li>
          <li>testimonials</li>
        </ul>
      </nav>

     <ButtonOlivia icon={<IoMailOpenOutline color="green" size={32} />} navigate={"/contact"} title={"contact me"}/>
    </header>
  );
};

export default NavBarOlivia;
