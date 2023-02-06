import React, { Component, PureComponent } from "react";

class RerenderBtn extends PureComponent {
  componentDidUpdate() {
    console.log("Update button");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props === nextProps) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    return (
      <button
        onClick={this.props.onIncrement}
        className="btn p-3 btn-outline-light w-25 mx-2"
        type="button"
      >
        {this.props.children}
      </button>
    );
  }
}

export default class Rerender extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  render() {
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {this.state.value}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <RerenderBtn
            obj={{ test: "test" }}
            onIncrement={this.handleIncrement}
          >
            Plus 1
          </RerenderBtn>
        </div>
      </div>
    );
  }
}
