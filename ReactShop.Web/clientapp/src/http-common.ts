import axios from "axios";
import LocalStorageService from "./store/api/LocalStorageService";

const localStorageService = new LocalStorageService();
const axiosInstance = axios.create({
  baseURL: "http://localhost:58976/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
