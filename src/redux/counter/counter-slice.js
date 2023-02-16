import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incrementAction: (state, action) => state + action.payload,
    decrementAction: (state, action) => state - action.payload,
  },
});

export const { incrementAction, decrementAction } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
