import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../../constants/genres";
import { AuthContext } from "../../context/AuthContext";
import { getLocalData } from "../../helpers/getLocalData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { selectIsAuth } from "../../redux/auth/auth-selector";
import { incrementAction } from "../../redux/counter/counter-slice";
import {
  selectFilmoteka,
  selectFilteredFilms,
  selectGenre,
} from "../../redux/filmoteka/filmoteka-selector";
import {
  addFilmAction,
  changeGenreAction,
  deleteFilmAction,
} from "../../redux/filmoteka/filmoteka-slice";
import { Button } from "../Button/Button";
import FilmList from "../FilmList/FilmList";
import GenresSelect from "../GenresSelect/GenresSelect";
import MovieForm from "../MovieForm/MovieForm";

const Filmoteka = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const filmList = useSelector(selectFilmoteka);
  const genre = useSelector(selectGenre);
  const filteredFilms = useSelector(selectFilteredFilms);

  const handleAddFilm = (newFilm) => {
    if (
      filmList.some(
        (film) =>
          film.filmName.toLowerCase().trim() ===
          newFilm.filmName.toLowerCase().trim()
      )
    ) {
      return alert(`${newFilm.filmName} already exists`);
    }
    // setFilmList((prev) => [...prev, newFilm]);
    dispatch(addFilmAction(newFilm));
  };

  const handleDeleteFilm = (id) => {
    dispatch(deleteFilmAction(id));
    // setFilmList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChangeGenre = (event) => {
    const { value } = event.target;
    dispatch(changeGenreAction(value));

    // setGenre(value);
  };

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(incrementAction());
        }}
      >
        Count
      </Button>
      <h2>Filmoteka </h2>
      {isAuth && <MovieForm onAddFilm={handleAddFilm} />}

      <GenresSelect onChange={handleChangeGenre} genre={genre} list={genres} />
      <FilmList filmList={filteredFilms} onDeleteFilm={handleDeleteFilm} />
    </div>
  );
};

export default Filmoteka;
