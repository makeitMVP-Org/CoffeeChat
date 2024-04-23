import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Corben&display=swap');
      </style>
    </BrowserRouter>
  </React.StrictMode>
);
