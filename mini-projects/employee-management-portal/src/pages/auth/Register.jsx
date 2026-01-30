import React, { useContext, useState } from "react";
import { roles } from "../../constant/data";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import pagePaths from "../../router/pagePaths";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import StoreContext from "../../contextApi/storeContext";

function Register() {
  const { saveUserInStorage } = useContext(StoreContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(true);

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

    //validation to check duplicate emails
    let isExist = previousEmployeeData.find(
      (employee) => employee.email === data.email,
    );
    if (isExist) {
      toast.error("email already registed !! try new email");
      return;
    }

    saveUserInStorage(dataToRegister);
    // let newData = [...previousEmployeeData, dataToRegister];
    // localStorage.setItem("userData", JSON.stringify(newData));

    alert("Registered successfully!");
    reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <form
        onSubmit={handleSubmit(handleRegisterEmployee)}
        className="bg-white text-gray-800 rounded-xl shadow-lg w-full max-w-2xl p-6 space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Register Employee
        </h2>

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
    </div>
  );
}

export default Register;
