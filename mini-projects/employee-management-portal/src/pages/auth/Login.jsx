import React, { useState } from "react";
import { roles } from "../../constant/data";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import pagePaths from "../../router/pagePaths";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { fetchusersAPI } from "../../services/apiCollections";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(true);

  function togglePasswordShow() {
    setShowPassword((prev) => !prev);
  }

  async function handleLoginEmployee(data) {
    // get userData (your stored data array)
    // let registeredEmployeeData = JSON.parse(localStorage.getItem("userData")); //string =>array JSON.parse(string)
    let registeredEmployeeData = await fetchusersAPI(); //string =>array JSON.parse(string)
    // console.log("all registered employee", typeof registeredEmployeeData);
    //find the provided email in userData
    let isExist = registeredEmployeeData?.find((emp) => {
      return emp.email === data.email;
    });
    console.log("found user=>", isExist);
    if (!isExist) {
      toast.error("user not registered!!");
      return;
    }

    // check if req is approved by admin
    if (isExist.isApproved === false) {
      return toast.error("your registration is not approved by admin yet");
    }
    //password matching
    let match = data.password === isExist.password;
    if (!match) {
      toast.error("invalid credentials");
      return;
    }

    toast.success(`hi ! ${isExist.name} . you are successfully logged In`);
    // storing user details in session
    sessionStorage.setItem(
      "loggedInUser",
      JSON.stringify({ ...isExist, password: undefined }),
    );
    sessionStorage.setItem("isLoggedIn", "$logyesUser");
    if (isExist.role !== "admin") {
      // navigate(pagePaths.EMPLOYEE);
      window.location.replace(pagePaths.EMPLOYEE);
    } else {
      // navigate(pagePaths.ADMIN);
      window.location.replace(pagePaths.ADMIN);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <form
        onSubmit={handleSubmit(handleLoginEmployee)}
        className="bg-white text-gray-800 rounded-xl shadow-lg w-full max-w-2xl p-6 space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Login Employee
        </h2>

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

        {/* Password */}
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Login
        </button>
        <div className="mt-10">
          <p>
            <span className="font-bold ">To Register</span>{" "}
            <Link
              className="text-blue-600 underline underline-offset-4"
              to={pagePaths.REGISTER}
            >
              click here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
