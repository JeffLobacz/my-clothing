import React from "react";
// The following line is commented out as it is no longer needed with React 18?
// import ReactDOM from "react-dom";

// The following line was added to use the new root API
import ReactDOMClient from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

// The 2 following lines were added to used the new root API
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

// ReactDOM was replaced with 'root' to use the new root API
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  // The following line was commented out as it appears to be redundant
  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
