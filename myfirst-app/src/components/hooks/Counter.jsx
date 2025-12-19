import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
function Counter() {
    console.log("component painted")
  // syntax
  // const [statname,setStateName] = useState(defaultvalue/initialstate)
  // statename is your variable name i.e number
  // setStateName is a setter function which will change you state i.e change number
  // initial state is the default value passed to your number i.e 0
  const [number, setNumber] = useState(0);
//   setNumber(number+1) //state change ===> repaint result in infinite loop

  function handleIncrement() {
    // number = number+1 X
    //changing value from 0 to 0+1
    setNumber(number+1);
  }
  function handleDecrement() {
    // number = number+1 X
    //changing value from 0 to 0+1
    setNumber(number-1);
  }



  return (
    <div
      id="box"
      className="text-center bg-blue-400 p-6 border m-8 text-2xl font-bold"
    >
      <button
        onClick={handleIncrement}
        className="p-4 text-gray-200 rounded-md bg-black"
      >
        <BiPlus/>
      </button>
      Counter : {number}{" "}
      <button
        onClick={handleDecrement}
        className="p-4 text-gray-200 rounded-md bg-black"
      >
        <BiMinus/>
      </button>
    </div>
  );
}

export default Counter;
