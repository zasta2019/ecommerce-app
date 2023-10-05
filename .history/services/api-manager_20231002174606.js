import axios from "axios";
import { BASE_URL } from "../config/config";

const ApiManager = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  withCredentials: true,
});

// Request interceptor to log request details
ApiManager.interceptors.request.use(
  (config) => {
    console.log("Request URL:", config.url);
    console.log("Request Method:", config.method);
    console.log("Request Headers:", config.headers);
    console.log("Request Data:", config.data);

    return config;
  },
  (error) => {
    console.error("Axios Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor to log response details
ApiManager.interceptors.response.use(
  (response) => {
    console.log("Response Status:", response.status);
    console.log("Response Data:", response.data);

    return response;
  },
  (error) => {
    console.error("Axios Response Error:", error);
    return Promise.reject(error);
  }
);

export default ApiManager;
