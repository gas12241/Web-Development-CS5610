import React from "react";
import "./App.css";

export default function Rules() {
  return (
    <div className="App">
      <h1>Gordle</h1>
      <div className="container">
        <div className="rules-formatting">
          This is the rules page!
          <br />
          <br />
          In this game, you will be guessing a random word from a set of words.
          <br />
          <br />
          There are two difficulties, normal and hard.
          <br />
          <br />
          Normal has you guess six-letter words with 6 guesses.
          <br />
          <br />
          Hard has you guess seven-letter words with 5 guesses.
          <br />
          <br />
          After every game, make sure to refresh the page if you would like to
          continue playing!
          <br />
          <br />
          If the game isn't loading properly, try clicking on a different page
          and return back to the game page
        </div>
      </div>
    </div>
  );
}
