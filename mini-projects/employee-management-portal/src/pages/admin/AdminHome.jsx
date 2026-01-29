import React from "react";
import PermissionTable from "../../components/tables/PermissionTable";
import { adminTabOptions } from "../../constant/data";
import { Link } from "react-router";

function AdminHome() {
  return (
    <div className="flex flex-col font-bold  h-screen ">
     
      {/* //screen or initial content */}
      <div>
        <PermissionTable />
      </div>
    </div>
  );
}

export default AdminHome;
