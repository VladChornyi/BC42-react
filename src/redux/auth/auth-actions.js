import { createAction, nanoid } from "@reduxjs/toolkit";

import { LOGIN, LOGOUT } from "./auth-types";

// export const loginAction = (payload) => ({ type: LOGIN, payload });
// export const logoutAction = () => ({ type: LOGOUT });

export const loginAction = createAction(LOGIN, (name) => {
  return {
    payload: {
      name,
      id: nanoid(),
    },
  };
});

// export const loginAction = createAction(LOGIN);
export const logoutActionCustom = createAction(LOGOUT);
