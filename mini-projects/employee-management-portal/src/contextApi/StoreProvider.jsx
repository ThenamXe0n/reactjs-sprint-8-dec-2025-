import React, { useState } from "react";
import StoreContext from "./storeContext";
import { sampleTaskListData } from "../constant/sampleData";

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

  const [taskList,setTaskList]= useState(sampleTaskListData)



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
        setTaskList
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
