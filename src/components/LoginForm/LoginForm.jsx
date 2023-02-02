import { nanoid } from "nanoid";
import { Component } from "react";
import { login } from "../../helpers/login";

const initialState = {
  email: "",
  password: "",
  skill: "",
  openToWork: false,
  adult: false,
  hobbie: "",
  users: [],
};

export class LoginForm extends Component {
  emailId = nanoid();
  passwordId = nanoid();
  isOpenToWorkId = nanoid();
  ageId = nanoid();

  state = {
    ...initialState,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, skill, openToWork, adult, hobbie } = this.state;

    const newUser = { email, password, skill, openToWork, adult, hobbie };

    login();
    this.setState((prevState) => ({
      ...initialState,
      users: [...prevState.users, newUser],
    }));
  };

  handleChangeSkill = (event) => {
    const { value } = event.target;
    this.setState({ skill: value });
  };

  hadleChangeCheckbox = (event) => {
    const { checked, value } = event.target;
    this.setState({ [value]: checked });
  };

  handleChangeInput = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, skill, adult, openToWork } = this.state;
    const { list } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="w-25">
        <div className="mb-3">
          <label htmlFor={this.emailId} className="form-label">
            Email address
          </label>
          <input
            onChange={this.handleChangeInput}
            name="email"
            type="email"
            className="form-control"
            id={this.emailId}
            value={email}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor={this.passwordId} className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={this.handleChangeInput}
            id={this.passwordId}
            value={password}
            required
            minLength={6}
          />
        </div>

        <select name="hobbie" onChange={this.handleChangeInput}>
          <option disabled>choose your hobbie</option>
          <optgroup label="Sport">
            <option value="football">football</option>
            <option value="box">box</option>
            <option value="dance">dance</option>
          </optgroup>
          <optgroup label="Other">
            <option value="travelling">travelling</option>
            <option value="casino777">casino777</option>
            <option value="DOTA">DOTA</option>
          </optgroup>
        </select>

        {list.map((item) => {
          const skillId = nanoid();
          return (
            <div key={item.value} className="form-check  mb-3">
              <input
                onChange={this.handleChangeSkill}
                value={item.value}
                className="form-check-input"
                type="radio"
                required
                name="skills"
                checked={skill === item.value}
                id={skillId}
              />
              <label className="form-check-label" htmlFor={skillId}>
                {item.title}
              </label>
            </div>
          );
        })}

        <div className="mb-3 form-check mt-5">
          <input
            onChange={this.hadleChangeCheckbox}
            type="checkbox"
            className="form-check-input"
            id={this.isOpenToWorkId}
            name="openToWork"
            value="openToWork"
            checked={openToWork}
          />
          <label className="form-check-label" htmlFor={this.isOpenToWorkId}>
            Open to work
          </label>
        </div>

        <div className="mb-3 form-check mt-5">
          <input
            onChange={this.hadleChangeCheckbox}
            type="checkbox"
            className="form-check-input"
            id={this.ageId}
            checked={adult}
            name="adult"
            value="adult"
            required
          />
          <label className="form-check-label" htmlFor={this.ageId}>
            age {">"} 18
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
