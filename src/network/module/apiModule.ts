import axios from "axios";

const apiModule = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export default apiModule;
