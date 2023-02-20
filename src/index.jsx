import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { App } from "./App";
import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor} loading={<p>Loading...</p>}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
