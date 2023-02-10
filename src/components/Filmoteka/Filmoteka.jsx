import { useContext, useEffect, useState } from "react";
import { genres } from "../../constants/genres";
import { AuthContext } from "../../context/AuthContext";
import { getLocalData } from "../../helpers/getLocalData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button } from "../Button/Button";
import FilmList from "../FilmList/FilmList";
import GenresSelect from "../GenresSelect/GenresSelect";
import MovieForm from "../MovieForm/MovieForm";

const LOCAL_FILMS_KEY = "filmListKey";

const Filmoteka = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const [filmList, setFilmList] = useLocalStorage(LOCAL_FILMS_KEY, []);
  const [genre, setGenre] = useState("All");

  const handleChangeGenre = (event) => {
    const { value } = event.target;
    setGenre(value);
  };

  const handleDeleteFilm = (id) => {
    setFilmList((prev) => prev.filter((item) => item.id !== id));
  };

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
    setFilmList((prev) => [...prev, newFilm]);
  };

  const handleFilterFilms = () => {
    const result = filmList.filter((item) => {
      return genre === "All" ? item : item.genre === genre;
    });
    return result;
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <button type="button" class="btn-close" aria-label="Close"></button>
      {isAuth ? (
        <Button onClick={logout}>Log out</Button>
      ) : (
        <Button onClick={() => login("admin")}>Log in</Button>
      )}

      <h2>Filmoteka </h2>
      {isAuth && <MovieForm onAddFilm={handleAddFilm} />}

      <GenresSelect onChange={handleChangeGenre} genre={genre} list={genres} />
      <FilmList
        filmList={handleFilterFilms()}
        onDeleteFilm={handleDeleteFilm}
      />
    </div>
  );
};

export default Filmoteka;
