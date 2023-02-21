import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../services/postsService";

export const getPostsThunk = createAsyncThunk(
  "posts/getAll",
  async (params, { rejectWithValue }) => {
    try {
      const data = await getPosts(params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadMoreThunk = createAsyncThunk(
  "posts/loadMore",
  async (params, { rejectWithValue }) => {
    try {
      const data = await getPosts(params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
