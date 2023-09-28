import axios from "axios";

export const error = () => {
  const arr = [];
  axios
    .get("https://gdrive-web-image-database.vercel.app/api/server")
    .then((res) => {
      arr.push(res.data);
    });
  return arr;
};
