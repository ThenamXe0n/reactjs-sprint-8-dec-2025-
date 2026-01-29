import React from "react";
import pagePaths from "./router/pagePaths";
import { Outlet, Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/employee/Home";
import MyTasks from "./pages/employee/MyTasks";
import EmployeeProfile from "./pages/employee/EmployeeProfile";
import AdminHome from "./pages/admin/AdminHome";
import Protected from "./router/protectedRouters/Protected";
import NavBar from "./components/NavBar";
import AdminProtected from "./router/protectedRouters/AdminProtect";
import AdminNavBar from "./components/AdminNavBar";
import EmployeManagementTab from "./components/EmployeManagementTab";
import TaskManagementTab from "./components/TaskManagementTab";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* public route  */}
        <Route
          path={pagePaths.HOME}
          element={
            <div className="flex items-center justify-center font-bold text-5xl h-screen ">
              landing page
            </div>
          }
        />

        <Route path={pagePaths.LOGIN} element={<Login />} />
        <Route path={pagePaths.REGISTER} element={<Register />} />

        {/* admin protected route  */}
        <Route
          path={pagePaths.ADMIN}
          element={
            <AdminProtected>
              <AdminNavBar />
              <Outlet />
            </AdminProtected>
          }
        >
          <Route index element={<AdminHome />} />
          <Route
            path={pagePaths.EMPLOYEE_MANAGEMENT}
            element={<EmployeManagementTab/>}
          />
          <Route path={pagePaths.TASK_MANAGEMENT} element={<TaskManagementTab/>} />
        </Route>

        {/* employee route (private) */}
        <Route
          path={pagePaths.EMPLOYEE}
          element={
            <Protected>
              <Outlet />
            </Protected>
          }
        >
          <Route index element={<Home />} />
          <Route path={pagePaths.MYTASK} element={<MyTasks />} />
          <Route
            path={pagePaths.EMPLOYEE_PROFILE}
            element={<EmployeeProfile />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
