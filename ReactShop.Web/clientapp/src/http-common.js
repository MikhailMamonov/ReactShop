import axios from "axios";
import LocalStorageService from "./LocalStorageService";

const localStorageService = LocalStorageService.getService();


const axiosInstance = axios.create({
  baseURL: "http://localhost:58976/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

// axiosInstance.interceptors.response.use((response) => {
//   return response
// }, function (error) {
//   const originalConfig = error.config;
//   if (error.response) {
//     if (error.response.status === 401&& !originalConfig._retry) {
//       originalConfig._retry = true;
//       // Do something, call refreshToken() request for example;
//       // return a request
//       return axios_instance(config);
//     }

    
//     if (error.response.status === ANOTHER_STATUS_CODE) {
//       // Do something 
//       return Promise.reject(error.response.data);
//     }
//   }
// }

// );

export default axiosInstance;