import React, { useContext, useEffect } from "react";
import { NormalGameContext } from "./NormalGame";

export default function Letter({ letterPosition, attemptValue }) {
  const {
    normalBoard,
    correctWord,
    currentAttempt,
    usedLetters,
    setUsedLetters,
  } = useContext(NormalGameContext);
  const letter = normalBoard[attemptValue][letterPosition];

  const yes = correctWord.toUpperCase()[letterPosition] === letter;
  const maybe =
    !yes && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
    currentAttempt.attempt > attemptValue &&
    (yes ? "correct" : maybe ? "almost" : "error");
  useEffect(() => {
    if (letter || maybe || (letter !== "" && !yes && !maybe)) {
      setUsedLetters((oldLetters) => [...oldLetters, letter]);
    }
  }, [currentAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {" "}
      {letter}
    </div>
  );
}
