import { useState } from "react";

function Profile() {
  const [profileLoggedIn, setProfileLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedInDetails")) || {}
  );

  function handleChangeProfileDetails() {
    console.log(profileLoggedIn);
    let data = {
      fullName: "Mindcoders",
      email: "mindcoders@gmail.com",
      contact: "585589958",
      profileImage:
        "https://tse3.mm.bing.net/th/id/OIP.uTcnWpsYSmCPBCc-P507NwHaHa?pid=Api&P=0&h=220",
    };
    setProfileLoggedIn(data);
    // localstorage
    localStorage.setItem("loggedInDetails", JSON.stringify(data));
  }
  console.log("current value", profileLoggedIn);

  return (
    <div>
      <section className="min-h-[80vh] p-8 space-y-4  mx-auto w-screen max-w-4xl border-4">
        <div className="size-56 overflow-hidden rounded-full border border-red-500">
          <img
            className="h-full  w-full object-cover"
            src={profileLoggedIn?.profileImage}
            alt="profileImage"
          />
        </div>
        <div className="text-2xl">
          <span className="font-bold ">Name : {profileLoggedIn?.fullName}</span>
        </div>
        <div className="text-2xl">
          <span className="font-bold ">Email : {profileLoggedIn?.email}</span>
        </div>
        <div className="text-2xl">
          <span className="font-bold ">
            contact no : {profileLoggedIn?.contact}
          </span>
        </div>
      </section>

      <button
        onClick={handleChangeProfileDetails}
        className="m-3 p-2 rounded-md bg-black active:bg-black/70 active:scale-95 hover:bg-green-600 text-white"
      >
        change details
      </button>
      {/* // here you need to use <ContactForm/>  */}
    </div>
  );
}

export default Profile;
