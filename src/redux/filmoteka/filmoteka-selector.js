import { createSelector } from "@reduxjs/toolkit";

export const selectFilmoteka = (state) => state.filmoteka.filmList;
export const selectGenre = (state) => state.filmoteka.genre;

// export const selectFilteredFilms = (state) => {
//   console.log("count");
//   const filmList = selectFilmoteka(state);
//   const genre = selectGenre(state);

//   const result = filmList.filter((item) => {
//     return genre === "All" ? item : item.genre === genre;
//   });
//   return result;
// };

export const selectFilteredFilms = createSelector(
  [selectFilmoteka, selectGenre],
  (filmList, genre) => {
    const result = filmList.filter((item) => {
      return genre === "All" ? item : item.genre === genre;
    });
    return result;
  }
);
