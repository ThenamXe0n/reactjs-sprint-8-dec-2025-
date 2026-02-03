import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import StoreContext from "../contextApi/storeContext";
import { assignTaskAPI } from "../services/apiCollections";
function TaskForm() {
  const { setTaskList, taskList, saveTaskInStorage, filteredEmployeeList } =
    useContext(StoreContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("employee list==>", filteredEmployeeList);

  // task add handler function
  function handleAddTask(data) {
    let payload = {
      taskId: `Task-${taskList.length + 1}`,
      ...data,
      status: "pending",
      followupMessage: "",
      createAt: new Date().toDateString(),
    };

    console.log("Task Data:", data);
    setTaskList((prev) => [...prev, payload]);
    saveTaskInStorage(payload);
    assignTaskAPI(payload);

    //   reset();
  }
  return (
    <div className="col-span-1">
      <h2>Task Form Component</h2>
      <form onSubmit={handleSubmit(handleAddTask)}>
        {/* title  */}
        <div>
          <label className="block font-medium mb-1">Task title</label>
          <input
            {...register("title", { required: "* title is required" })}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task title"
            type="text"
          />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>
        {/* description */}
        <div>
          <label className="block font-medium mb-1">Task description</label>
          <textarea
            {...register("des", { required: "* description is required" })}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task description"
            type="text"
          />
          {errors.des && (
            <p className="text-sm text-red-500 mt-1">{errors.des.message}</p>
          )}
        </div>

        {/* assignedTo  */}
        <div>
          <label className="block font-medium mb-1">Assigned To</label>
          {/* <input
            {...register("assignedTo", {
              required: "* assigned user is required",
            })}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task description"
            type="text"
          /> */}
          <select
            {...register("assignedTo", {
              required: "* assigned user is required",
            })}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option>--select employee--</option>
            {filteredEmployeeList?.map((employee, employeeIndex) => (
              <option value={employee.email} key={employeeIndex}>
                {employee?.name}-{employee.email}
              </option>
            ))}
          </select>
          {errors.assignedTo && (
            <p className="text-sm text-red-500 mt-1">
              {errors.assignedTo.message}
            </p>
          )}
        </div>

        {/* task deadline */}
        <div>
          <label className="block font-medium mb-1 capitalize">
            deadline date
          </label>
          <input
            {...register("deadline", {
              required: "* task deadline date is required",
            })}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="datetime-local"
          />
          {errors.deadline && (
            <p className="text-sm text-red-500 mt-1">
              {errors.deadline.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
