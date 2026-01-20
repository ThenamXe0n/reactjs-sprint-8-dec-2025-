import React from "react";
import { Link } from "react-router";
import pagePaths from "../../router/pagePaths";

function Home() {
  return (
    <div className="flex items-center justify-center font-bold text-5xl h-screen ">
      employee Home
      <Link to={pagePaths.MYTASK}>My tasks</Link>
    </div>
  );
}

export default Home;
