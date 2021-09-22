import axios from "axios";
import LocalStorageService from "./LocalStorageService";
import store, { AppDispatch } from "../store";
import { logout } from "./../action-creators/auth";
import { Dispatch } from "redux";
import { useAppDispatch } from "./../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { history } from "../../helpers/history";

const localStorageService = new LocalStorageService();
const UNAUTHORIZED = 401;
const axiosInstance = axios.create({
  baseURL: "http://localhost:58976/api",
  headers: {
    "Content-type": "application/json",
  },
});
// Request interceptor for API calls
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
    // Reject promise if usual error
    if (error.status !== 401) {
      return Promise.reject(error);
    }
    const originalConfig = error.config;
    // Reject promise if usual error

    if (error.response) {
      if (error.response.status === UNAUTHORIZED && !originalConfig._retry) {
        originalConfig._retry = true;
        // Do something, call refreshToken() request for example;
        // return a request
        history.push("login");
        return Promise.reject(error);
      }
    }
  }
);

export default axiosInstance;
