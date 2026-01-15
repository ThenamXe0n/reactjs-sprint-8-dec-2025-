import { useState } from "react";

let sampleData = [
  {
    id: 1,
    quote:
      "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    author: "Rumi",
  },
  {
    id: 2,
    quote:
      "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    author: "Abdul Kalam",
  },
  {
    id: 3,
    quote:
      "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
    author: "Abdul Kalam",
  },
  {
    id: 4,
    quote: "If You Can'T Make It Good, At Least Make It Look Good.",
    author: "Bill Gates",
  },
  {
    id: 5,
    quote:
      "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
    author: "Rumi",
  },
];

let payload = {
  id: 6,
  quote:"It is bad for a young man to sin; but it is worse for an old man to sin.",
  author: "Abu Bakr (R.A)",
};

const ExampleState = () => {
  let [data, setData] = useState(sampleData);
  let [totalData, setTotalData] = useState(sampleData.length);

  console.log("data", data);
  console.log("no of quotes", totalData);


  function addData(){
    setData((prev)=>[...prev,payload])
    setTotalData((prev)=>prev+1)
    alert("data added!!")
  }
  function addData(){
    setData((prev)=>[...prev,payload])
    setTotalData((prev)=>prev+1)
    alert("data added!!")
  }

  return (
    <div>
      <button onClick={addData} className="bg-black text-white rounded-md px-4 py-1">
        add one more data
      </button>
    </div>
  );
};

export default ExampleState;
