import { Component } from "react";

import { Button } from "../Button";

export class SearchPosts extends Component {
  state = {
    query: "",
  };

  handleSubmit = () => {
    this.props.onClick(this.state.query);
  };

  handleChangeQuery = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;
    const { onClick } = this.props;
    return (
      <div className="input-group mb-3">
        <input
          onChange={this.handleChangeQuery}
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={query}
        />
        <Button onClick={this.handleSubmit}>Search</Button>
      </div>
    );
  }
}
