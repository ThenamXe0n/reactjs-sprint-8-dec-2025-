import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import pagePaths from "../router/pagePaths";

function NavBar() {
  let isLoggedIn = sessionStorage.getItem("isLoggedIn") || false;
  function handleLogout() {
    //clear the source of login(session storage keys)
    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("isLoggedIn");
    toast.success("loggedout successfully!");

    //navigate with refresh
    window.location.replace(pagePaths.HOME);
  }

  return (
    <header className="w-screen p-6 bg-emerald-600 text-white">
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-600 rounded-md px-6 py-1 text-white"
        >
          Logout
        </button>
      ) : (
        <Link
          className="bg-blue-600 rounded-md px-6 py-1 text-white"
          to={pagePaths.LOGIN}
        >
          Log in
        </Link>
      )}
    </header>
  );
}

export default NavBar;
