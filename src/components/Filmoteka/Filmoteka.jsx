import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { genres } from "../../constants/genres";
import { AuthContext } from "../../context/AuthContext";
import { getLocalData } from "../../helpers/getLocalData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { selectIsAuth } from "../../redux/auth/auth-selector";
import {
  addFilmAction,
  changeGenreAction,
  deleteFilmAction,
} from "../../redux/filmoteka/filmoteka-slice";
import { Button } from "../Button/Button";
import FilmList from "../FilmList/FilmList";
import GenresSelect from "../GenresSelect/GenresSelect";
import MovieForm from "../MovieForm/MovieForm";

const LOCAL_FILMS_KEY = "filmListKey";

const Filmoteka = () => {
  // const { isAuth, login, logout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  // const [filmList, setFilmList] = useLocalStorage(LOCAL_FILMS_KEY, []);
  const selectFilmList = useSelector((state) => state.filmoteka.filmList);
  const selectGenre = useSelector((state) => state.filmoteka.genre);
  // const [genre, setGenre] = useState("All");

  const handleAddFilm = (newFilm) => {
    if (
      selectFilmList.some(
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

  const handleFilterFilms = () => {
    const result = selectFilmList.filter((item) => {
      return selectGenre === "All" ? item : item.genre === selectGenre;
    });
    return result;
  };

  return (
    <div>
      <h2>Filmoteka </h2>
      {isAuth && <MovieForm onAddFilm={handleAddFilm} />}

      <GenresSelect
        onChange={handleChangeGenre}
        genre={selectGenre}
        list={genres}
      />
      <FilmList
        filmList={handleFilterFilms()}
        onDeleteFilm={handleDeleteFilm}
      />
    </div>
  );
};

export default Filmoteka;
