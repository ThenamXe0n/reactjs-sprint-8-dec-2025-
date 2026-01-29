import React, { useContext } from "react";
import { adminTabOptions } from "../constant/data";
import { Link } from "react-router";
import StoreContext from "../contextApi/storeContext";

function AdminNavBar() {
  const { loggedInUser,  filteredEmployeeList } = useContext(StoreContext);
  console.log("loggedInUser in AdminNavBar:", loggedInUser);
  return (
    <header>
      <div className="bg-black flex justify-between items-center text-white p-4">
        <h1 className=" text-lg text-left ">Admin Dashboard</h1>
        <div>
          <p>
            Welcome, {loggedInUser.name} {loggedInUser.role}
          </p>
          <div className="bg-green-600 p-3">user count :{filteredEmployeeList.length} </div>
        </div>
        <div className="flex items-center gap-4">
          {" "}
          {adminTabOptions.map((tab, tabIndex) => (
            <Link
              to={tab.navigate}
              key={tabIndex}
              className="text-white bg-blue-600 p-2"
            >
              {tab.icon} {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default AdminNavBar;
