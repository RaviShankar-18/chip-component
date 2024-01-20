import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LiveSearch from "./LiveSearch.jsx";
import Chip from "./Chip.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LiveSearch /> */}
    <Chip />
  </React.StrictMode>
);
