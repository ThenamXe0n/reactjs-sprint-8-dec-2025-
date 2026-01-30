import React, { useContext } from "react";
import TaskManageTable from "./tables/TaskManageTable";
import TaskForm from "./TaskForm";
import StoreContext from "../contextApi/storeContext";

function TaskManagementTab() {
  const { taskList } = useContext(StoreContext);
  return (
    <div className="grid grid-cols-4 gap-3 p-4 w-screen">
      {/* form  */}
      <TaskForm />
      {/* table  */}
      <TaskManageTable taskList={taskList} />
    </div>
  );
}

export default TaskManagementTab;
