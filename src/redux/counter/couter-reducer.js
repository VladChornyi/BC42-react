import { createReducer } from "@reduxjs/toolkit";
// import { DECREMENT, INCREMENT } from "./action-types";
import { decrementAction, incrementAction } from "./counter-actions";

// export const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + action.payload;
//     case DECREMENT:
//       return state - action.payload;
//     default:
//       return state;
//   }
// };

export const counterReducer = createReducer(
  0,
  (builder) => {
    builder
      .addCase(incrementAction, (state, action) => state + action.payload)
      .addCase(decrementAction, (state, action) => state - action.payload);
  }
  //   {
  //   [incrementAction]: (state, action) => state + action.payload,
  //   [decrementAction]: (state, action) => state - action.payload,
  // }
);
