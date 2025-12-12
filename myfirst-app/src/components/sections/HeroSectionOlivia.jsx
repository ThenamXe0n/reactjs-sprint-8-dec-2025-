import React from "react";
// import heroImage from "../../assets/imageProfile.png"

function HeroSectionOlivia({image,title,desc}) {
  return (
    <section className="w-[80vw] pt-24 flex flex-col-reverse lg:flex-row h-fit md:h-screen mx-auto py-16">
      <div className="flex-1 flex flex-col gap-y-6">
        <p className="border text-lg p-2 captilazed w-fit border-black">
          HELLO THERE
        </p>
        <button className="border w-fit border-gray-500 bg-[#344c36] text-yellow-700 px-4 py-2 rounded-[50px]">
          click me
        </button>
       {title}
        <p className="text-sm">
         {desc}
        </p>
        <div>
          <button className="px-6 py-2 rounded-full bg-green-700 hover:bg-blue-600 text-white">
            view my profile
          </button>
          <button className="px-6 py-2 rounded-full bg-white border text-black">
            hire me
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img
          className="h-full w-full"
          src={image}
          alt="profile_pic"
        />
      </div>
    </section>
  );
}

export default HeroSectionOlivia;
