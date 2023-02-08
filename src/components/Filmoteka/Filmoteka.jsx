import { useEffect, useState } from "react";
import { genres } from "../../constants/genres";
import { getLocalData } from "../../helpers/getLocalData";
import FilmList from "../FilmList/FilmList";
import GenresSelect from "../GenresSelect/GenresSelect";
import MovieForm from "../MovieForm/MovieForm";

const LOCAL_FILMS_KEY = "filmListKey";

const Filmoteka = () => {
  const [filmList, setFilmList] = useState(
    () => getLocalData(LOCAL_FILMS_KEY) ?? []
  );
  const [genre, setGenre] = useState("All");

  useEffect(() => {
    localStorage.setItem(LOCAL_FILMS_KEY, JSON.stringify(filmList));
  }, [filmList]);

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
      <h2>Filmoteka </h2>
      <MovieForm onAddFilm={handleAddFilm} />
      <GenresSelect onChange={handleChangeGenre} genre={genre} list={genres} />
      <FilmList
        filmList={handleFilterFilms()}
        onDeleteFilm={handleDeleteFilm}
      />
    </div>
  );
};

export default Filmoteka;
