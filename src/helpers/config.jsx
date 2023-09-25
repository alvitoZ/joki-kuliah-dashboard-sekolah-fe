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
	baseURL: "https://2093-103-186-31-38.ngrok-free.app",
});
