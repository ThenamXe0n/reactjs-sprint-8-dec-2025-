import React from "react";
import { roles } from "../../constant/data";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register, // form state //
    handleSubmit, // onsubmit handle function
    reset, //reset function
    formState: { errors }, //errors state (object)
  } = useForm();

  console.log("error", errors);

  function handleRegisterEmployee(data) {
    console.log("form captured data", data);
    //fetch previous (if any )
    let previousEmployeeData =
      JSON.parse(localStorage.getItem("userData")) || [];
    console.log("previous data", previousEmployeeData);
    //add new data in previous array
    let newData = [...previousEmployeeData, data];
    console.log("newData", newData);

    localStorage.setItem("userData", JSON.stringify(newData));
    alert("registed successfully");
  }

  return (
    <div className="flex items-center justify-center bg-blue-200  h-screen ">
      <form
        onSubmit={handleSubmit(handleRegisterEmployee)}
        className="border bg-blue-600 text-white rounded-md space-y-2 p-4 min-h-[60vh] w-2/3"
      >
        <h3 className="text-center text-2xl uppercase font-bold">
          Register Employee
        </h3>
        {/* //name  */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="name" className="text-lg font-semibold">
            Name
          </label>
          <input
            {...register("employeeName", { required: "name is required" })}
            className="ring-2 rounded-sm p-1 ring-neutral-400"
            id="name"
            placeholder="enter employee name"
            type="text"
          />
          {errors.name && (
            <p className="text-red-200">*{errors?.name?.message}</p>
          )}
        </div>
        {/* email  */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            {...register("email")}
            className="ring-2 rounded-sm p-1 ring-neutral-400"
            id="email"
            placeholder="enter employee email"
            required
            type="email"
          />
        </div>
        {/* mobile number  */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="mobile" className="text-lg font-semibold">
            Mobile
          </label>
          <input
            className="ring-2 rounded-sm p-1 ring-neutral-400"
            id="mobile"
            {...register("contact")}
            placeholder="enter employee mobile"
            required
            maxLength={10}
            type="text"
          />
        </div>
        {/* joining date */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="joining" className="text-lg font-semibold">
            Joining Date
          </label>
          <input
            className="ring-2 rounded-sm p-1 ring-neutral-400"
            id="joining"
            required
            {...register("joining")}
            type="date"
          />
        </div>
        {/* role  */}
        <div className="flex flex-col gap-y-1">
          <label htmlFor="role" className="text-lg font-semibold">
            role
          </label>
          <select
            {...register("role")}
            className="ring-2 rounded-sm p-1 ring-neutral-400"
            id="role"
          >
            <option>--select role--</option>
            {roles.map((role, roleIndex) => (
              <option key={roleIndex} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <button className="text-white bg-black px-3 py-1 w-full mt-4">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
