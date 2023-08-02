import axios from "axios";

const apiModule = axios.create({
  baseURL: import.meta.env.VITE_APP_PICSUM,
});

export default apiModule;
