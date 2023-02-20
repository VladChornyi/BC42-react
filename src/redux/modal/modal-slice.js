import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    openModalAction: () => true,
    closeModalAction: () => false,
    toggleModalAction: (state) => !state,
  },
});

export const { openModalAction, closeModalAction, toggleModalAction } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
