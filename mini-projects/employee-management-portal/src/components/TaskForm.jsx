import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import StoreContext from "../contextApi/storeContext";
function TaskForm() {
  const { setTaskList } = useContext(StoreContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // task add handler function
  function handleAddTask(data) {
    console.log("Task Data:", data);
   setTaskList((prev)=>[...prev,data])

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
          <input
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
          <input
            {...register("assignedTo", {
              required: "* assigned user is required",
            })}
            className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter task description"
            type="text"
          />
          {errors.assignedTo && (
            <p className="text-sm text-red-500 mt-1">
              {errors.assignedTo.message}
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
