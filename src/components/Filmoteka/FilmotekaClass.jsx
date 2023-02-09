import PropTypes from "prop-types";
import { Component } from "react";
import { genres } from "../../constants/genres";
import FilmList from "../FilmList/FilmList";
import GenresSelect from "../GenresSelect/GenresSelect";
import MovieForm from "../MovieForm/MovieForm";

const LOCAL_FILMS_KEY = "filmListKey";

class FilmotekaClass extends Component {
  state = {
    filmList: [],
    genre: "All",
  };

  componentDidMount() {
    const savedFilmList = JSON.parse(localStorage.getItem(LOCAL_FILMS_KEY));
    if (savedFilmList) {
      this.setState({ filmList: savedFilmList });
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return window.scrollY;
  }

  componentDidUpdate(_, prevState, snapshot) {
    if (prevState.filmList.length !== this.state.filmList.length) {
      localStorage.setItem(
        LOCAL_FILMS_KEY,
        JSON.stringify(this.state.filmList)
      );
      window.scrollTo({ top: snapshot + 500, behavior: "smooth" });
    }
  }

  handleChangeGenre = (event) => {
    const { value } = event.target;
    this.setState({ genre: value });
  };

  handleDeleteFilm = (id) => {
    this.setState((prevState) => ({
      filmList: prevState.filmList.filter((item) => item.id !== id),
    }));
  };

  handleAddFilm = (newFilm) => {
    if (
      this.state.filmList.some(
        (film) =>
          film.filmName.toLowerCase().trim() ===
          newFilm.filmName.toLowerCase().trim()
      )
    ) {
      return alert(`${newFilm.filmName} already exists`);
    }
    this.setState((prevState) => ({
      filmList: [...prevState.filmList, newFilm],
    }));
  };

  handleFilterFilms = () => {
    const { filmList, genre } = this.state;
    const result = filmList.filter((item) => {
      return genre === "All" ? item : item.genre === genre;
    });
    return result;
  };

  render() {
    return (
      <div>
        <h2>Filmoteka </h2>
        <MovieForm onAddFilm={this.handleAddFilm} />
        <GenresSelect
          onChange={this.handleChangeGenre}
          genre={this.state.genre}
          list={genres}
        />
        <FilmList
          filmList={this.handleFilterFilms()}
          onDeleteFilm={this.handleDeleteFilm}
        />
      </div>
    );
  }
}

export default FilmotekaClass;
