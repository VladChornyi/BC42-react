import { LOGIN, LOGOUT } from "./auth-types";

const initialState = { isAuth: false, name: "" };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { isAuth: true, name: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
