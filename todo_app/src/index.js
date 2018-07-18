import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import App from './App.js'
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";


registerServiceWorker();

ReactDOM.render(
      <App/>,
       document.getElementById("root"));