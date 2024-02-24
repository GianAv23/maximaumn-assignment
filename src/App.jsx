import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./components/Card";

function App() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await axios.get("https://catfact.ninja/fact");
        setCatFact(response.data.fact);
      } catch (error) {
        console.error("Error fetching cat facts: ", error);
      }
    };

    fetchCatFact();
  }, []);

  return (
    <div className="">
      <div className="bg-blue-950 w-full h-screen flex flex-wrap p-10 items-center place-content-center flex-col gap-4">
        {catFact ? (
          <p className="text-3xl text-white">{catFact}</p>
        ) : (
          <p className="text-3xl text-white">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;

// const [count, setCount] = useState(2);

// const Penjumlahan = () => {
//   setCount(count + 1);
// };

// const Pengurangan = () => {
//   if (count > 0) {
//     setCount(count - 1);
//   } else {
//     setCount(0);
//   }
// };

// const Reset = () => {
//   setCount(0);
// };

// const Data = ["Gian", "Albert", "Fatan"];

{
  /* <span className="text-5xl text-blue-50">useState</span>
        <div className="flex flex-wrap items-center place-content-center gap-10 flex-row">
          <button
            className="rounded-full bg-blue-300 p-5 text"
            onClick={Penjumlahan}
          >
            <span className="text-4xl font-semibold ">+</span>
          </button>
          <span className="text-3xl text-white font-bold">{count}</span>

          <button
            className="rounded-full bg-blue-300 p-5 text"
            onClick={Pengurangan}
          >
            <span className="text-4xl font-semibold ">-</span>
          </button>
        </div>
        <button
          className="rounded-full w-48 bg-blue-300 p-2 text"
          onClick={Reset}
        >
          <span className="text-2xl font-semibold ">Reset</span>
        </button>
        {Data.map((Data) => (
          <h1 key={Data} className="text-cyan-500">
            {Data}
          </h1>
        ))} */
}
