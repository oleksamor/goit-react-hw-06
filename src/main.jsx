import React from "react";
import "modern-normalize";
import App from "./componenets/App";
import "./index.css";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
