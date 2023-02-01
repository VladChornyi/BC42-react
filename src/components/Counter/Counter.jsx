import { Component } from "react";

const mobilePhones = [
  { title: "iPhone", name: "iphone" },
  { title: "Android", name: "android" },
];

export class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }
  state = {
    // value: 0,
    ios: 0,
    android: 1,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      if (prevState.value > 0) {
        return { value: prevState.value - 1 };
      }
      return;
    });
  };

  handleVotePhone = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  // handleVoteAndroid = () => {
  //   this.setState((prevState) => ({ android: prevState.android + 1 }));
  // };
  // handleVoteIOS = () => {
  //   this.setState((prevState) => ({ ios: prevState.ios + 1 }));
  // };

  render() {
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        {/* <p className="text-center my-5" style={{ fontSize: 80 }}>
          {this.state.value}
        </p> */}
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          IOS: {this.state.ios}
        </p>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          Android: {this.state.android}
        </p>

        <div className="d-flex align-items-center justify-content-center w-100">
          <button
            name="ios"
            onClick={this.handleVotePhone}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Vote IOS
          </button>
          <button
            name="android"
            onClick={this.handleVotePhone}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Vote Android
          </button>
          {/* <button
            onClick={this.handleIncrement}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Plus
          </button>
          <button
            onClick={this.handleDecrement}
            className="btn p-3 btn-outline-light w-25 mx-2"
            type="button"
          >
            Minus
          </button> */}
        </div>
      </div>
    );
  }
}
