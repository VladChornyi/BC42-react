import { createSlice, nanoid } from "@reduxjs/toolkit";
import { logoutActionCustom } from "./auth-actions";

const initialState = { isAuth: false, name: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: {
      reducer: (state, action) => {
        state.isAuth = true;
        state.name = action.payload;
      },
      prepare: (name) => ({
        payload: {
          name,
          id: nanoid(),
        },
      }),
    },
    logoutAction: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(logoutActionCustom, () => initialState);
  },
});

export const { loginAction, logoutAction } = authSlice.actions;
export const authReducer = authSlice.reducer;
