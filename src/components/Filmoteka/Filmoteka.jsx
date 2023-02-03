import PropTypes from "prop-types";
import { Component } from "react";
import { genres } from "../../constants/genres";
import FilmList from "../FilmList/FilmList";
import GenresSelect from "../GenresSelect/GenresSelect";
import MovieForm from "../MovieForm/MovieForm";

class Filmoteka extends Component {
  state = {
    filmList: [],
    genre: "All",
  };

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
    const { filmList } = this.state;
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

Filmoteka.propTypes = {};

export default Filmoteka;
