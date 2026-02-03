import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import pagePaths from "../router/pagePaths";
import { roles } from "../constant/data";
import { Link } from "react-router";
import EmployeeDetailsTable from "./tables/EmployeeDetailsTable";

function EmployeManagementTab() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(true);
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser")) || {};
  const filteredUserList =
    JSON.parse(localStorage.getItem("userData"))?.filter((item) => {
      return item.email !== loggedInUser.email;
    }) || [];
  console.log(filteredUserList, "filteredUserList");
  function togglePasswordShow() {
    setShowPassword((prev) => !prev);
  }

  function handleRegisterEmployee(data) {
    // console.log(data);
    let dataToRegister = {
      ...data,
      isApproved: data.role === "admin" ? true : false,
    };
    let previousEmployeeData =
      JSON.parse(localStorage.getItem("userData")) || [];

    let newData = [...previousEmployeeData, dataToRegister];
    localStorage.setItem("userData", JSON.stringify(newData));

    alert("Registered successfully!");
    reset();
  }
  return (
    <div className="flex ">
      {/* //form  */}
      <form
        onSubmit={handleSubmit(handleRegisterEmployee)}
        className="bg-white text-gray-800 rounded-xl shadow-lg w-full max-w-2xl p-6 space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Register Employee
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter employee name"
              type="text"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter employee email"
              type="email"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block font-medium mb-1">Mobile</label>
            <input
              {...register("contact", {
                required: "Mobile number is required",
                maxLength: {
                  value: 10,
                  message: "Max 10 digits allowed",
                },
              })}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter mobile number"
              type="text"
            />
            {errors.contact && (
              <p className="text-sm text-red-500 mt-1">
                {errors.contact.message}
              </p>
            )}
          </div>
          {/* password  */}
          <div>
            <label className="block font-medium mb-1">Password</label>
            <div className="flex items-center rounded-md border pr-4">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "should be min 6 digits",
                  },
                })}
                className="w-full px-3 py-2 outline-none"
                placeholder="Enter password"
                type={showPassword ? "text" : "password"}
              />
              <div onClick={togglePasswordShow}>
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Joining Date */}
          <div>
            <label className="block font-medium mb-1">Joining Date</label>
            <input
              {...register("joining", { required: "Joining date is required" })}
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block font-medium mb-1">Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full px-3 py-2 rounded-md border bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- Select Role --</option>
              {roles.map((role, roleIndex) => (
                <option key={roleIndex} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Register
        </button>
        <div className="mt-10">
          <p>
            <span className="font-bold ">Already Registered ?</span>{" "}
            <Link
              className="text-blue-600 underline underline-offset-4"
              to={pagePaths.LOGIN}
            >
              Login
            </Link>
          </p>
        </div>
      </form>

      {/* table  */}
      <EmployeeDetailsTable filteredUser={filteredUserList} />
    </div>
  );
}

export default EmployeManagementTab;
