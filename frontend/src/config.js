import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

const token = localStorage.getItem('token');
console.log("SERVICES: ", token);

export const authAxios = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})