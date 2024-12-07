import axios from "axios";
import { API_BASE_URL } from "../config/env";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers["x-api-key "] = "U2FsdGVkX18CcMe1wBKIwPmWOBY7NAIU2FsdGVkX18CcMe1wBKIwPmWOBY7NAIDD"
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
