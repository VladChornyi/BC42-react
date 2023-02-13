import axios from "axios";

const postsService = axios.create({
  baseURL: "http://70.34.201.18:8080/posts/",
  params: {
    limit: 6,
  },
});

export const getPosts = async (params) => {
  const { data } = await postsService.get("", {
    params,
  });
  return data;
};

export const getSinglePost = async (id, params) => {
  const { data } = await postsService.get(id, { params });
  return data;
};
