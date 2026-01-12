import React from "react";
import { Link } from "react-router";
import pagePaths from "../routes/pagePath";

function NavBar() {
  return (
    <header className="bg-white fixed w-screen top-0 left-0 shadow-2xl p-6 flex items-center justify-center gap-x-10">
      <Link to={pagePaths.HOME}>Home</Link>
      <Link to={pagePaths.ALL_COURSES}>all couses</Link>
      <Link to={pagePaths.ADD_COURSE}>add couses</Link>
    </header>
  );
}

export default NavBar;
