import { React, useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "./axios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import allinonecat from "/src/assets/allinonecat.png";

function App() {
  const [catFact, setCatFact] = useState("");
  const [error, setError] = useState("");
  const isInitialMount = useRef(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [catFact]);

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
      if (error !== "") {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error,
          confirmButtonText: "Try again",
          customClass: {
            title: "my-title-class",
            content: "my-content-class",
            confirmButton: "my-confirm-button-class",
          },
        });
      }
    }
  };

  const handleReload = () => {
    setCatFact("");
    setError("");
    fetchCatFact();
  };

  return (
    <div className="bg-bgColor w-full h-full flex flex-wrap items-center ss:max-sl:place-content-center sl:max-md:place-content-center md:place-content-center xl:justify-around">
      {/* IMAGE START */}
      <div
        className="flex flex-wrap "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1100"
      >
        <img
          className="z-0 h-[500px] sl:max-md:h-full md:h-screen lg:h-screen"
          src={allinonecat}
          alt=""
        />
      </div>
      {/* IMAGE END */}

      {/* QUOTES SECTION START */}
      <div className="flex flex-wrap flex-col gap-8 mt-10 sm:pl-4 md:pr-3 md:items-start lg:pr-16 lg:max-xl:items-end xl:items-end">
        <div>
          <span className="text-titleColor text-4xl font-bold xl:text-6xl">
            CAT FACT
          </span>
        </div>

        <div>
          {catFact ? (
            <div className="text-appear">
              <p className="text-textColor text-xl w-[250px] md:text-start lg:w-[400px] xl:text-2xl lg:max-xl:text-end xl:text-end">
                {catFact}
              </p>
            </div>
          ) : (
            <p className="text-xl text-textColor">Loading...</p>
          )}
        </div>

        <button
          onClick={handleReload}
          className="animate-pulse rounded-full text-bgColor bg-titleColor px-4 py-2 mt-4 font-semibold mb-11 hover:bg-primaryColor hover:text-titleColor"
          style={{ animationDuration: "2s" }}
        >
          Click for more quotes
        </button>
      </div>
      {/* QUOTES SECTION END */}
    </div>
  );
}

export default App;
