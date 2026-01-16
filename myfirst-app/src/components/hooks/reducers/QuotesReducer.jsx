import React, { useReducer } from "react";

function reducer(state, action) {
  console.log("state is", state);
  console.log("action is", action);

  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default: 

  }

  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  if (action.type === "reset") {
    return {
      ...state,
      count: 0,
      totalNumber: 100,
    };
  }

  if (action.type === "mauallysetCounter") {
    return {
      count: action.payload,
    };
  }
}

const QuotesReducer = ({name}) => {
  const [state, dispatch] = useReducer(reducer, { count: 0, totalNumber: 0 });
  console.log("state value", state);
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-black text-white rounded-md px-4 py-1"
      >
        increment
      </button>
      <span>{state.count}</span>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="bg-black text-white rounded-md px-4 py-1"
      >
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset counter</button>

      <input
        onChange={(e) =>
          dispatch({ type: "mauallysetCounter", payload: e.target.value })
        }
      />
    </div>
  );
};

export default QuotesReducer;
