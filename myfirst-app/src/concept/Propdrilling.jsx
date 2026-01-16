import React, { useContext } from "react";
import { MoneyContext } from "../main";

function Propdrilling({ money }) {
  return (
    <div className="h-[80%] bg-blue-300 w-[80%]">
      <h1 className="text-center font-bold text-3xl">2nd layer</h1>
      <ThirdLayer moneypassed={money} />
    </div>
  );
}

export default Propdrilling;

// ========= 3rd layer=====
function ThirdLayer({ moneypassed }) {
  return (
    <div className="h-[80%] bg-red-300 w-[80%]">
      <h1 className="text-center font-bold text-3xl">3rd layer</h1>
      <ForthLayer />
    </div>
  );
}

// forth layer
function ForthLayer({ m }) {
  return (
    <div className="h-[80%] bg-orange-300 w-[80%]">
      <h1 className="text-center font-bold text-3xl">4th layer</h1>
      <FifthLayer passedmoney={m} />
    </div>
  );
}

// fifth layer
function FifthLayer() {
    const context = useContext(MoneyContext)
    console.log("this is moneycontext value=>",context)
  return (
    <div className="h-[80%] bg-cyan-300 w-[80%]">
      <h1 className="text-center font-bold text-3xl">5th layer</h1>
      <p>money {context?.money} for {context.for} </p>
    </div>
  );
}
