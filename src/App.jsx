import "./App.css";
import axios from "./axios";
import { React, useState, useEffect, useRef } from "react";

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
    <div className="bg-blue-950 w-full h-screen flex flex-wrap p-10 items-center place-content-center flex-col gap-4">
      <div className="text-white">{error !== "" && error}</div>
      {catFact ? (
        <div>
          <p className="text-3xl text-white">{catFact}</p>
        </div>
      ) : (
        <p className="text-3xl text-white">Loading...</p>
      )}

      <button
        onClick={handleReload}
        className="text-white bg-blue-500 px-4 py-2 mt-4 rounded hover:bg-blue-700"
      >
        Reload
      </button>
    </div>
  );
}

export default App;
