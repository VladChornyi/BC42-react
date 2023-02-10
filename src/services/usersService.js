import axios from "axios";

export const usersService = axios.create({
  baseURL: "https://63c7e1d3075b3f3a91d50f37.mockapi.io/users",
});

export const getUsers = async () => {
  const { data } = await usersService.get("");
  return data;
};

export const deleteUser = async (id) => {
  const { data } = await usersService.delete(id);
  return data;
};
