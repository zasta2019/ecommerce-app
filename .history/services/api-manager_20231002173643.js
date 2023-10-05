import axios from "axios";

import { BASE_URL } from "../config/config";

// const ApiManager = axios.create({
    
//     baseURL: BASE_URL,
//     responseType:"json",
//     withCredentials:true
// })

ApiManager.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('Axios Error:', error);
      return Promise.reject(error);
    }
  );
console.log(BASE_URL)
export default ApiManager;