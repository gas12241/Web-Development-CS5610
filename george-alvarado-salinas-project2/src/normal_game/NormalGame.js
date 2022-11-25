import React, { useState, createContext, useEffect } from "react";
import NormalGameBoard from "./NormalGameBoard";
import Keyboard from "./Keyboard";
import GameOver from "./GameOver";
import "../App.css";
import { normalBoardDefault, makeWordSet } from "./NormalWords";

export const NormalGameContext = createContext();

export default function NormalGame() {
  const [normalBoard, setNormalBoard] = useState(normalBoardDefault);
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
    if (currentAttempt.letterPosition > 5) return;
    const newBoard = [...normalBoard];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal;
    setNormalBoard(newBoard);
    setErrorMessage("");
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...normalBoard];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setErrorMessage("");
    setNormalBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 6) {
      setErrorMessage("Word is not long enough!");
      return;
    }
    let currentWord = "";
    for (let i = 0; i < 6; i++) {
      currentWord += normalBoard[currentAttempt.attempt][i];
    }
    if (wordSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      setErrorMessage("Word not Found!");
    }
    if (currentWord.toLowerCase() === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };

  return (
    <div className="App">
      <h2>Gordle</h2>
      <NormalGameContext.Provider
        value={{
          normalBoard,
          setNormalBoard,
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
        {errorMessage}
        <div className="game">
          <NormalGameBoard />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </NormalGameContext.Provider>
    </div>
  );
}
