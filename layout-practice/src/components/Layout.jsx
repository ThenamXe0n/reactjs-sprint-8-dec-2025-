import React, { Children } from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import { usersList } from "../data/constants";

function Layout({ children }) {
  return (
    <div className="w-screen flex h-screen bg-black/90">
      <SideBar  />
      <div className="flex-1 flex flex-col h-full">
        <NavBar loggedInUserDetails={usersList[0]}  />
        <main className=" flex-1 overflow-scroll">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
