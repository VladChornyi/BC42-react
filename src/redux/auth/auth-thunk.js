import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateAPI } from "../../http/http";
import {
  logInService,
  refreshUserService,
  signUpService,
  token,
} from "../../services/authService";

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signUpService(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await logInService(credentials);
      token.set(data.access_token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refreshUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const savedToken = getState().auth.token;
      if (!savedToken) {
        return rejectWithValue("there is no token");
      }
      token.set(savedToken);
      const data = await refreshUserService();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const logOutThunk = createAsyncThunk(
//   "auth/logout",
//   async (_, { rejectWithValue }) => {
//     try {
//        await logOutService();
//        token.unSet()
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
