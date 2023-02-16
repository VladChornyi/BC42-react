import { createAction } from "@reduxjs/toolkit";
import { DECREMENT, INCREMENT } from "./action-types";

// export const incrementAction = (payload) => ({ type: INCREMENT, payload });
// export const decrementAction = (payload) => ({ type: DECREMENT, payload });

export const incrementAction = createAction(INCREMENT);
export const decrementAction = createAction(DECREMENT);
