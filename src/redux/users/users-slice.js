import { createSlice } from "@reduxjs/toolkit";
import { FETCH_STATUS } from "../../constants/fetchStatus";
import { deleteUserThunk, getUsersThunk } from "./users-thunk";

const handlePending = (state) => {
  state.status = FETCH_STATUS.loading;
};
const handleRejected = (state) => {
  state.status = FETCH_STATUS.rejected;
};

const initialState = {
  status: FETCH_STATUS.idle,
  items: [],

  // error: null,
  // isLoading: false
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  //   reducers: {
  //     getUsersPending: (state) => {
  //       state.status = FETCH_STATUS.loading;
  //     },
  //     getUsersFulfilled: (state, { payload }) => {
  //       state.status = FETCH_STATUS.fullfilled;
  //       state.items = payload;
  //     },
  //     getUsersRejected: (state) => {
  //       state.status = FETCH_STATUS.rejected;
  //     },
  //     deleteUsersPending: (state) => {
  //       state.status = FETCH_STATUS.loading;
  //     },
  //     deleteUsersFulfilled: (state, { payload }) => {
  //       state.status = FETCH_STATUS.fullfilled;
  //       state.items = state.items.filter((user) => user.id !== payload);
  //     },
  //     deleteUsersRejected: (state) => {
  //       state.status = FETCH_STATUS.rejected;
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(deleteUserThunk.pending, handlePending)
      .addCase(getUsersThunk.rejected, handleRejected)
      .addCase(deleteUserThunk.rejected, handleRejected)

      .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
        state.status = FETCH_STATUS.fullfilled;
        state.items = payload;
      })
      .addCase(deleteUserThunk.fulfilled, (state, { payload }) => {
        state.status = FETCH_STATUS.fullfilled;
        // state.items = state.items.filter((user) => user.id !== payload);
      })
      .addDefaultCase((state, action) => {
        state.status = FETCH_STATUS.loading;
      });
  },
});

// export const {
//   getUsersPending,
//   getUsersFulfilled,
//   getUsersRejected,
//   deleteUsersPending,
//   deleteUsersFulfilled,
//   deleteUsersRejected,
// } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
