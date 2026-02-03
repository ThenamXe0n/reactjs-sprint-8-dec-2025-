import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  counterIncrement,
  counterDecrement,
  resetCounter,
  customValueCounter
} from "./redux/countSlice";

function App() {
  const { count, clicked } = useSelector((s) => s.counter);
  const dispatch = useDispatch();

  function handleIncrement() {
    console.log("handle increment ran");
    dispatch(counterIncrement());
  }
  function handleDecrement() {
    dispatch(counterDecrement());
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>You changed counter : {clicked} times</h1>
      <div className="card" style={{ display: "flex ", gap: "20px" }}>
        <button
          style={{ background: "green", color: "white" }}
          onClick={() => dispatch(resetCounter())}
        >
          reset count
        </button>
        <button onClick={handleIncrement}>count is {count}</button>
        <button
          onClick={handleDecrement}
          style={{ background: "red", color: "white" }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <input
          type="number"
          placeholder="enter value"
          onChange={(e) => dispatch(customValueCounter(e.target.value))}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
