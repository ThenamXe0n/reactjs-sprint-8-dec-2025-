import React from "react";

function HomePage() {
  return (
    <section className="h-screen w-screen flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-5xl font-extrabold text-pink-600 text-center capitalize ">
        Welcome to the Student Course Dashboard
      </h1>
      <button className="bg-black text-white rounded-md px-5 py-1 text-lg hover:bg-emerald-500 duration-300 cursor-pointer">
        Explore Course
      </button>
    </section>
  );
}

export default HomePage;
