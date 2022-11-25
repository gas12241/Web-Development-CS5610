import React, { useContext, useEffect } from "react";
import { HardGameContext } from "./HardGame";

export default function Letter({ letterPosition, attemptValue }) {
  const {
    hardBoard,
    correctWord,
    currentAttempt,
    usedLetters,
    setUsedLetters,
  } = useContext(HardGameContext);
  const letter = hardBoard[attemptValue][letterPosition];

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
    <div className="hard-letter" id={letterState}>
      {" "}
      {letter}
    </div>
  );
}
