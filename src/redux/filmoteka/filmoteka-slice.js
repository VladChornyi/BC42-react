import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filmList: [],
  genre: "All",
};

const filmotekaSlice = createSlice({
  name: "filmoteka",
  initialState,
  reducers: {
    addFilmAction: (state, { payload }) => {
      state.filmList = [...state.filmList, payload];
    },
    deleteFilmAction: (state, { payload }) => {
      state.filmList = state.filmList.filter((item) => item.id !== payload);
    },
    changeGenreAction: (state, { payload }) => {
      state.genre = payload;
    },
  },
});

export const { addFilmAction, deleteFilmAction, changeGenreAction } =
  filmotekaSlice.actions;
export const filmotekaReducer = filmotekaSlice.reducer;
