import { LOGIN, LOGOUT } from "./auth-types";

export const loginAction = (payload) => ({ type: LOGIN, payload });
export const logoutAction = () => ({ type: LOGOUT });
