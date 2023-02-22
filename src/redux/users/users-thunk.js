import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUser, getUsers } from "../../services/usersService";

export const getUsersThunk = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUsers();
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);

// export const getUsersThunk = () => async (dispatch) => {
//   try {
//     dispatch(getUsersPending());
//     const data = await getUsers();
//     dispatch(getUsersFulfilled(data));
//   } catch {
//     dispatch(getUsersRejected());
//   }
// };
export const deleteUserThunk = createAsyncThunk(
  "users/deleteUser",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await deleteUser(id);
      return data;
      // dispatch(getUsersThunk());
    } catch {
      return rejectWithValue();
    }
  }
);

// export const deleteUserThunk = (id) => async (dispatch) => {
//   try {
//     dispatch(deleteUsersPending());
//     //   const data = await deleteUser(id);
//     await deleteUser(id);
//     dispatch(deleteUsersFulfilled(id));
//   } catch {
//     dispatch(deleteUsersRejected());
//   }
// };

// console.log(getResult);
// console.log(getResult(10));
// console.log(getResult(20));
// console.log(getResult(5));
