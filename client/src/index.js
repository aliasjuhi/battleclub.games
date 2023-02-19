import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)