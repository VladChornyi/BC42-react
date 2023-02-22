import { privateAPI, publicAPI } from "../http/http";

export const token = {
  set: (token) => {
    privateAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateAPI.defaults.headers.Authorization = "";
  },
};

export const signUpService = async (credentials) => {
  const { data } = await publicAPI.post("users/create", credentials);
  return data;
};

export const logInService = async (credentials) => {
  const { data } = await publicAPI.post("users/login", credentials);
  return data;
};

export const refreshUserService = async () => {
  const { data } = await privateAPI.get("users/profile");
  return data;
};

// export const logOutService = () => {
//   return privateAPI.post("users/logout");
// };
