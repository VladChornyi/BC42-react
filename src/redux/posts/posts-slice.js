import { createSlice } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../constants/fetchStatus";
import { getPostsThunk, loadMoreThunk } from "./posts-thunk";

const handlePending = (state) => {
  state.status = FETCH_STATUS.loading;
};
const handleRejected = (state) => {
  state.status = FETCH_STATUS.rejected;
};

const initialState = {
  items: null,
  page: 1,
  status: FETCH_STATUS.idle,
  totalItems: 0,
  totalPages: 1,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadMoreAction: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, handlePending)
      .addCase(loadMoreThunk.pending, handlePending)
      .addCase(getPostsThunk.rejected, handleRejected)
      .addCase(loadMoreThunk.rejected, handleRejected)
      .addCase(getPostsThunk.fulfilled, (state, { payload }) => {
        state.items = payload.data;
        state.status = FETCH_STATUS.fullfilled;
        state.page = payload.page;
        state.totalItems = payload.total_items;
        state.totalPages = payload.total_pages;
      })
      .addCase(loadMoreThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.data];
        state.status = FETCH_STATUS.fullfilled;
        state.page = payload.page;
        state.totalItems = payload.total_items;
        state.totalPages = payload.total_pages;
      });
  },
});

export const { loadMoreAction } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
