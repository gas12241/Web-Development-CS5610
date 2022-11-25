import React, { useContext } from "react";
import { NormalGameContext } from "./NormalGame";

export default function Key({ keyVal, bigKey, used }) {
  const { onDelete, onSelectLetter, onEnter } = useContext(NormalGameContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : used && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}
