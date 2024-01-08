import axios from "axios";

const localToken = localStorage.getItem("token");

const api = axios.create({
  baseURL: "https://dream-restaurant.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    ...(localToken && { Authorization: `Bearer ${localToken}` }),
  },
});

export default api;
