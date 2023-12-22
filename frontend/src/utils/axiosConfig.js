import axios from "axios";

const localToken = localStorage.getItem("token");
const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localToken}`,
  },
});

export default api;
