import axios from "axios";

export const privateAPI = axios.create({
  baseURL: "http://70.34.201.18:4444/",
});

export const publicAPI = axios.create({
  baseURL: "http://70.34.201.18:4444/",
});
