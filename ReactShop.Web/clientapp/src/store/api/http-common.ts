import axios from "axios";
import LocalStorageService from "./LocalStorageService";
import { history } from "../../helpers/history";

const localStorageService = new LocalStorageService();
const UNAUTHORIZED = 401;
const axiosInstance = axios.create({
  baseURL: "http://localhost:58976/api",
  headers: {
    "Content-type": "application/json",
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

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status !== 401) {
      return Promise.reject(error);
    }
    const originalConfig = error.config;

    if (error.response) {
      if (error.response.status === UNAUTHORIZED && !originalConfig._retry) {
        originalConfig._retry = true;
        history.push("login");
        return Promise.reject(error);
      }
    }
  }
);

export default axiosInstance;
