import React from "react";
import "modern-normalize";
import App from "./componenets/App";
import "./index.css";
import { Provider } from "react-redux";
import { ReactDOM } from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
