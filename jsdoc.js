/**
 * Component representing the main application.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  /**
   * State for storing the cat fact.
   * @type {[string, function]}
   */
  const [catFact, setCatFact] = useState("");

  /**
   * State for storing the error message.
   * @type {[string, function]}
   */
  const [error, setError] = useState("");

  /**
   * Ref to track initial mount.
   * @type {object}
   */
  const isInitialMount = useRef(true);

  /**
   * Fetches a cat fact from the API.
   */
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

  /**
   * Handles the reload button click.
   */
  const handleReload = () => {
    setCatFact("");
    setError("");
    fetchCatFact();
  };

  return (
    <div className="bg-bgColor w-full h-full flex flex-wrap items-center ss:max-sl:place-content-center sl:max-md:place-content-center md:place-content-center xl:justify-around">
      {/* IMAGE START */}
      <div className="flex flex-wrap">
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

/**
 * A custom Axios instance for fetching cat facts.
 * @module axiosInstance
 */

import axios from "axios";

/**
 * Creates a new Axios instance with a base URL for fetching cat facts.
 * @type {import("axios").AxiosInstance}
 */
const instance = axios.create({
  baseURL: "https://catfact.ninja",
});

export default instance;