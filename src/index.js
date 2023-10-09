import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
