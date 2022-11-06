import React from "react";
import Square from "./Square";
import "./Parent.css";
import { useState } from "react";

export default function Parent() {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  function handleClick() {
    if (isActive) {
      setCounter(counter - 1);
      setIsActive(false);
      // setCounter += 1;
      // setIsActive = true;
    } else {
      setCounter(counter + 1);
      setIsActive(true);
      // setCounter -= 1;
      // setIsActive = false;
    }
  }
  function handleClick2() {
    if (isActive2) {
      setCounter(counter - 1);
      setIsActive2(false);
    } else {
      setCounter(counter + 1);
      setIsActive2(true);
    }
  }
  function handleClick3() {
    if (isActive3) {
      setCounter(counter - 1);
      setIsActive3(false);
    } else {
      setCounter(counter + 1);
      setIsActive3(true);
    }
  }
  function handleClick4() {
    if (isActive4) {
      setCounter(counter - 1);
      setIsActive4(false);
    } else {
      setCounter(counter + 1);
      setIsActive4(true);
    }
  }

  return (
    <div className="page-container">
      <div className="Counter">Counter: {counter}</div>
      <div className="Box">
        <Square func={handleClick} activeStatus={isActive} />
        <Square func={handleClick2} activeStatus={isActive2} />
      </div>
      <div>
        <Square func={handleClick3} activeStatus={isActive3} />
        <Square func={handleClick4} activeStatus={isActive4} />
      </div>
    </div>
  );
}
