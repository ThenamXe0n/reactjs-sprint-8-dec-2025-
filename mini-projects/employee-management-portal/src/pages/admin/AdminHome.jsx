import React from "react";
import PermissionTable from "../../components/tables/PermissionTable";

function AdminHome() {
  return (
    <div className="flex flex-col font-bold  h-screen ">
      <h1 className="bg-black text-white text-lg text-left p-4">
        Admin Dashboard
      </h1>
      {/* //screen or initial content */}
      <div>
        <PermissionTable />
      </div>
    </div>
  );
}

export default AdminHome;
