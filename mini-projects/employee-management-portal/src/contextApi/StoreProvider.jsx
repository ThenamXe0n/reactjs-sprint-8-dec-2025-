import React, { useState } from "react";
import StoreContext from "./storeContext";
import { sampleTaskListData } from "../constant/sampleData";
import toast from "react-hot-toast";

function StoreProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employeeListData, setEmployeeListData] = useState(
    JSON.parse(localStorage.getItem("userData")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedInUser")) || {},
  );
  const [filteredEmployeeList, setFilteredEmployeeList] = useState(
    JSON.parse(localStorage.getItem("userData")).filter((item) => {
      return item.email !== loggedInUser.email;
    }),
  );

  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskListData")) || sampleTaskListData,
  );

  function saveTaskInStorage(task) {
    let previousData = JSON.parse(localStorage.getItem("taskListData")) || [];
    let newData = [...previousData, task];
    localStorage.setItem("taskListData", JSON.stringify(newData));
    toast.success("item saved in storage");
  }
  function saveUserInStorage(task) {
    let previousData = JSON.parse(localStorage.getItem("userData")) || [];
    let newData = [...previousData, task];
    localStorage.setItem("userData", JSON.stringify(newData));
    toast.success("item saved in storage");
  }

  return (
    <StoreContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        employeeListData,
        setEmployeeListData,
        loggedInUser,
        setLoggedInUser,
        filteredEmployeeList,
        setFilteredEmployeeList,
        taskList,
        setTaskList,
        saveTaskInStorage,
        saveUserInStorage
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
