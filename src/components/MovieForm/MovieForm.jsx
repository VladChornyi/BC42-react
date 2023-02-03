import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { genres } from "../../constants/genres";
import { Form, Input, Select } from "./MovieForm.styled";

const INITIAL_STATE = {
  filmName: "",
  url: "",
  genre: "",
  views: "",
};

console.log("Input :>> ", Input);
class MovieForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChangeInfo = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    this.props.onAddFilm({ ...this.state, id: nanoid() });
    this.setState(INITIAL_STATE);
  };

  render() {
    const { filmName, url, genre, views } = this.state;
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <Input
          name="filmName"
          onChange={this.handleChangeInfo}
          type="text"
          placeholder="Film name"
          required
          minLength={3}
          value={filmName}
        />
        <Input
          name="url"
          onChange={this.handleChangeInfo}
          type="text"
          placeholder="Avatar URL"
          required
          minLength={10}
          value={url}
        />
        <Select name="genre" value={genre} onChange={this.handleChangeInfo}>
          <option value="" disabled>
            Choose ganre
          </option>
          {genres.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </Select>
        <Input
          name="views"
          onChange={this.handleChangeInfo}
          placeholder="views"
          required
          min="0"
          type="number"
          value={views}
        />
        <button className="btn btn-primary" type="submit">
          ADD FILM
        </button>
      </Form>
    );
  }
}

MovieForm.propTypes = {
  onAddFilm: PropTypes.func.isRequired,
};
MovieForm.defaultProps = {
  onAddFilm: console.log,
};

export default MovieForm;
