import { useState } from "react";

function ProfileForm({ setProfileLoggedIn }) {
  console.log("profile form re rendered");
  const [data, setData] = useState({
    fullName: "",
    email: "",
    contact: "",
    profileImage: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    alert("form submitted");
    console.log("data is ", data);
    setProfileLoggedIn(data); //setProfileLoggedIn()
  }

  function handleOnChange(e) {
    // console.log(e.target, "this is target element");
    // console.log(e.target.value, e.target.name);
    //new data value set
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  //   console.log("current data", data);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-200 p-6 max-w-2xl mx-auto  space-y-6"
    >
      <div className="flex flex-col ">
        <label htmlFor="username" className="font-bold mb-2">
          User Name
        </label>
        <input
          onChange={handleOnChange}
          id="username"
          type="text"
          name="fullName"
          placeholder="enter username"
          className="p-2 border-2 rounded-md border-white"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="email" className="font-bold mb-2">
          Email
        </label>
        <input
          onChange={handleOnChange}
          id="email"
          name="email"
          type="email"
          placeholder="enter user email"
          className="p-2 border-2 rounded-md border-white"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="contact" className="font-bold mb-2">
          contact
        </label>
        <input
          onChange={handleOnChange}
          id="contact"
          name="contact"
          type="text"
          placeholder="enter user number"
          className="p-2 border-2 rounded-md border-white"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="profile" className="font-bold mb-2">
          image url
        </label>
        <input
          onChange={handleOnChange}
          id="profile"
          name="profileImage"
          type="url"
          placeholder="paste profile image url"
          className="p-2 border-2 rounded-md border-white"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="city" className="font-bold mb-2">
          city
        </label>
        <input
          onChange={handleOnChange}
          id="city"
          name="city"
          type="text"
          placeholder="paste profile image url"
          className="p-2 border-2 rounded-md border-white"
        />
      </div>
      <button className="bg-black text-white p-2 rounded-md m-2">
        {" "}
        register details{" "}
      </button>
    </form>
  );
}

export default ProfileForm;
