import React, { useState, createContext, useEffect } from "react";
import HardGameBoard from "./HardGameBoard";
import Keyboard from "./Keyboard";
import GameOver from "./GameOver";
import "../App.css";
import { hardBoardDefault, makeWordSet } from "./HardWords";

export const HardGameContext = createContext();

export default function HardGame() {
  const [hardBoard, setHardBoard] = useState(hardBoardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [usedLetters, setUsedLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    makeWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.randomWord);
    });
  }, []);

  const onSelectLetter = (keyVal) => {
    if (currentAttempt.letterPosition > 6) return;
    const newBoard = [...hardBoard];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal;
    setHardBoard(newBoard);
    setErrorMessage("");
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...hardBoard];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setErrorMessage("");
    setHardBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 7) {
      setErrorMessage("Word is not long enough!");
      return;
    }
    let currentWord = "";
    for (let i = 0; i < 7; i++) {
      currentWord += hardBoard[currentAttempt.attempt][i];
    }
    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      setErrorMessage("Word not found!");
    }
    if (currentWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currentAttempt.attempt === 4) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  return (
    <div className="App">
      <h2>Gordle</h2>
      <HardGameContext.Provider
        value={{
          hardBoard,
          setHardBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onDelete,
          onEnter,
          correctWord,
          usedLetters,
          setUsedLetters,
          gameOver,
          setGameOver,
          errorMessage,
          setErrorMessage,
        }}
      >
        <div>{errorMessage}</div>
        <div className="game">
          <HardGameBoard />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </HardGameContext.Provider>
    </div>
  );
}
