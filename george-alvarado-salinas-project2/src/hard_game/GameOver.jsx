import React, { useContext } from "react";
import { HardGameContext } from "./HardGame";

export default function GameOver() {
  const { gameOver, currentAttempt, correctWord } = useContext(HardGameContext);
  return (
    <div className="gameOver">
      <h1>
        {gameOver.guessedWord
          ? "Congratulations! You won!"
          : "Unluck Bubberduck, you didn't guess the word D:"}
      </h1>
      <h1>Correct word was {correctWord}</h1>
      {gameOver.guessedWord && (
        <h2>You guessed in {currentAttempt.attempt} attempts!</h2>
      )}
      <button onClick={() => window.location.reload(false)}>
        Click to reload!
      </button>
    </div>
  );
}
