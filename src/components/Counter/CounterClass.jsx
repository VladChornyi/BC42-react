import { Component } from "react";

const mobilePhones = [
  { title: "iPhone", name: "iphone" },
  { title: "Android", name: "android" },
];

export class CounterClass extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 0,
  //   };
  // }
  state = {
    value: 0,
    ios: 0,
    android: 0,
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
        </div>
      </div>
    );
  }
}
