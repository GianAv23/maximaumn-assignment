import axios from "axios";

const instance = axios.create({
  baseURL: "https://catfact.ninja",
});

export default instance;
