import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import AdsSidebar from "./AdsSidebar";
import Home from "../pages/Home";
import About from "../pages/About";

function Layout({ children ,name}) {
  
  return (
    <div>
      <div className="w-screen ">
        <NavBar />
      </div>
      <div className="flex w-screen min-h-screen">
        <aside className="bg-blue-400 w-[10%]  min-h-20 ">
          <SideBar />
        </aside>
        <main className="bg-pink-400  w-[80%] max-h-screen h-fit overflow-scroll">
          {children}
        </main>
        <div id="ads_container" className="bg-neutral-500 w-[10%]  min-h-20 ">
          <AdsSidebar />
        </div>
      </div>
      <footer className="bg-black text-white min-w-full min-h-20 ">
        {children}
      </footer>
    </div>
  );
}

export default Layout;
