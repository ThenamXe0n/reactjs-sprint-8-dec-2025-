import React from "react";
import TaskManageTable from "./tables/TaskManageTable";
import TaskForm from "./TaskForm";

function TaskManagementTab() {
  return (
    <div className="grid grid-cols-4 gap-3 p-4 w-screen">
      {/* form  */}
      <TaskForm />
      {/* table  */}
      <TaskManageTable />
    </div>
  );
}

export default TaskManagementTab;
