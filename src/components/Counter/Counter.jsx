import { useEffect, useState } from "react";

const mobilePhones = [
  { title: "iPhone", name: "iphone" },
  { title: "Android", name: "android" },
];

export const Counter = () => {
  const [ios, setIos] = useState(0);
  const [android, setAndroid] = useState(0);

  const handleVotePhone = (e) => {
    const { name } = e.target;
    switch (name) {
      case "ios":
        setIos((prev) => prev + 1);
        break;
      case "android":
        setAndroid((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  // handleVoteAndroid = () => {
  //   this.setState((prevState) => ({ android: prevState.android + 1 }));
  // };
  // handleVoteIOS = () => {
  //   this.setState((prevState) => ({ ios: prevState.ios + 1 }));
  // };

  return (
    <div className="mb-5 p-5 text-white bg-dark rounded-3">
      <h2 className="text-center">Counter</h2>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        IOS: {ios}
      </p>
      <p className="text-center my-5" style={{ fontSize: 80 }}>
        Android: {android}
      </p>

      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          name="ios"
          onClick={handleVotePhone}
          className="btn p-3 btn-outline-light w-25 mx-2"
          type="button"
        >
          Vote IOS
        </button>
        <button
          name="android"
          onClick={handleVotePhone}
          className="btn p-3 btn-outline-light w-25 mx-2"
          type="button"
        >
          Vote Android
        </button>
      </div>
    </div>
  );
};
