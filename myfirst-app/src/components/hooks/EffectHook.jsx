import React, { useState, useEffect } from "react";

function EffectHook() {
  console.log("EffectHook component Rendered");
  //syntax of useState
  //   const [statname,setStatename] = useState("initialvalue");
  const [name, setName] = useState("mindcoders");
  const [pageNo,setPageNo] = useState(1);

  function handleNameChange(e) {
    console.log("name",e?.target?.value);
    setName(e?.target?.value);
  }
  function handlePageNoChange(e) {
    console.log(e?.target?.value);
    setPageNo(e?.target?.value);
  }
  //syntax of useEffect
  useEffect(() => {
    alert("useEffect called");
  },[name]); //dependency array

  return (
    <div className="flex h-screen space-y-4 items-center justify-center flex-col">
      <h1 className="text-2xl font-bold text-center">
        The current Value of Name is written below
      </h1>
      <p className="text-5xl font-extrabold text-center text-emerald-700">
        {name}
      </p>

      <input
        type="text"
        onChange={handleNameChange}
        placeholder="enter new name"
        className="border-2 p-3 text-3xl mx-auto"
      />
      <input
        type="text"
        onChange={handlePageNoChange}
        placeholder="enter new name"
        className="border-2 p-3 text-3xl mx-auto"
      />
    </div>
  );
}

export default EffectHook;
