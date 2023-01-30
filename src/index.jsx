import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const pElement = React.createElement("p", null, "Hello BC42");

// const PComponent = (props) => React.createElement("p", props);

// const element = React.createElement("a", {
//   href: "https://en.privatbank.ua/",
//   children: PComponent({ children: "BC42", class: "text" }),
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
