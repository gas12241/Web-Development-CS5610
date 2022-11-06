import React from "react";
import { useState } from "react";
export default function Square(props) {
  const handleClick = props.func;
  const isActive = props.activeStatus;
  let color = "";

  const colorstyle = {
    backgroundColor: "white",
  };
  if (isActive) {
    colorstyle.backgroundColor = "black";
  }
  return (
    <div
      className="cell"
      style={
        colorstyle
        // backgroundColor: { color },
      }
      onClick={handleClick}
    ></div>
  );
}
