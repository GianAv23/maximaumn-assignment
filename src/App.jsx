import { React, useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "./axios";
import bgcat from "/src/assets/bgcat.svg";
import catmaster from "/src/assets/catmaster.svg";
import catmaster2 from "/src/assets/catmaster.png";
import allinonecat from "/src/assets/allinonecat.png";

function App() {
  const [catFact, setCatFact] = useState("");
  const [error, setError] = useState("");
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      fetchCatFact();
    }
  }, []);

  const fetchCatFact = async () => {
    try {
      const response = await axios.get("/fact");
      setCatFact(response.data.fact);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleReload = () => {
    setCatFact("");
    setError("");
    fetchCatFact();
  };

  return (
    <div className="bg-bgColor w-full h-screen flex flex-wrap items-center justify-around">
      {/* <div className="text-white">{error !== "" && error}</div> */}

      {/* untuk gambar */}
      <div className="flex flex-wrap bg-fixed">
        <img className="h-screen z-0" src={allinonecat} alt="" />
      </div>

      {/* untuk tulisan */}
      <div className="flex flex-wrap flex-col w-[600px] items-end place-content-end pr-32 gap-14">
        <div>
          <span className="text-titleColor text-6xl font-bold">CAT FACT</span>
        </div>

        <div>
          {catFact ? (
            <div className="text-appear">
              <p className="text-2xl text-textColor text-end">{catFact}</p>
            </div>
          ) : (
            <p className="text-xl text-textColor">Loading...</p>
          )}
        </div>

        <div className="">
          <button
            onClick={handleReload}
            className="animate-pulse rounded-full text-bgColor bg-titleColor px-4 py-2 mt-4 font-semibold hover:bg-primaryColor hover:text-titleColor"
            style={{ animationDuration: "5s" }}
          >
            Click for more quotes
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
