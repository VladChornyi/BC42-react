import { createReducer, current } from "@reduxjs/toolkit";
// import { LOGIN, LOGOUT } from "./auth-types";
import { loginAction, logoutAction } from "./auth-actions";

const initialState = { isAuth: false, name: "" };

// export const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return { isAuth: true, name: action.payload };
//     case LOGOUT:
//       return initialState;
//     default:
//       return state;
//   }
// };

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      // console.log(current(state));
      state.isAuth = true;
      state.name = action.payload;
    })
    .addCase(logoutAction, () => {
      return initialState;
    });
});
