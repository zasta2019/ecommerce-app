import axios from "axios";

import { BASE_URL } from "../config/config";

const ApiManager = axios.create({
    
    baseURL: BASE_URL,
    responseType:"json",
    withCredentials:true
})
console.log(BASE_URL)
export default ApiManager;