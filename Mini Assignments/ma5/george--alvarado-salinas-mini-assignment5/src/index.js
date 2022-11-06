import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./Calculator";
import "./index.css";
import Square from "./Square";
import Parent from "./Parent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Parent />
    </div>
  </React.StrictMode>
);
