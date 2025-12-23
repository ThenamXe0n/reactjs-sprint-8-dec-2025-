import { useState } from "react";
import ProfileForm from "../components/forms/ProfileForm";

let data = {
  fullName: "jslkdlkjsfd",
  email: "mindcoders@gmail.com",
  contact: "585589958",
  profileImage:
    "https://tse3.mm.bing.net/th/id/OIP.uTcnWpsYSmCPBCc-P507NwHaHa?pid=Api&P=0&h=220",
};
function Profile() {
  console.log("profile page is re rendered")
  const [profileLoggedIn, setProfileLoggedIn] = useState(data);

  // function handleChangeProfileDetails() {
  //   console.log(profileLoggedIn);
  //   setProfileLoggedIn(data);
  //   // localstorage
  //   localStorage.setItem("loggedInDetails", JSON.stringify(data));
  // }
  // console.log("current value", profileLoggedIn);

  return (
    <div className="flex gap-2">
      <section className="min-h-[50vh] p-8 space-y-4  mx-auto w-screen max-w-2xl border-4">
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

      {/* <button
        onClick={handleChangeProfileDetails}
        className="m-3 p-2 rounded-md bg-black active:bg-black/70 active:scale-95 hover:bg-green-600 text-white"
      >
        change details
      </button> */}
      {/* // here you need to use <ContactForm/>  */}
      <ProfileForm setProfileLoggedIn={setProfileLoggedIn} />
    </div>
  );
}

export default Profile;
