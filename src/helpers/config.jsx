import axios from "axios";

export const publicHeader = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "content-type": "multipart/form-data",
  };
};
export const tokenHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
};
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASEURL}`,
});
