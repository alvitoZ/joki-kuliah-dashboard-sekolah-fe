import axios from "axios";

export const publicHeader = () => {
  return {
    "Content-Type": "application/json",
  };
};
export const tokenHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
};
export const api = axios.create({
  baseURL: "http://localhost:3001",
});
