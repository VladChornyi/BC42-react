import { Component } from "react";

const INTERVAL = 1000;

export class Timer extends Component {
  state = { date: new Date() };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, INTERVAL);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    const hours = String(this.state.date.getHours()).padStart(2, "0");
    const minutes = String(this.state.date.getMinutes()).padStart(2, "0");
    const seconds = String(this.state.date.getSeconds()).padStart(2, "0");

    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Timer</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {`${hours}:${minutes}:${seconds}`}
        </p>
      </div>
    );
  }
}
