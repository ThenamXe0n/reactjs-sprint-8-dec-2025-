import React, { useContext } from "react";
import TaskManageTable from "../../components/tables/TaskManageTable";
import StoreContext from "../../contextApi/storeContext";

function MyTasks() {
  const { taskList, loggedInUser } = useContext(StoreContext);

  let myTask = taskList.filter((task) => {
    return task.assignedTo === loggedInUser.email;
  });

  return (
    <div>
      <TaskManageTable taskList={myTask} />
    </div>
  );
}

export default MyTasks;
