import sevenLetterWords from "./seven_letter_words.txt";
export const hardBoardDefault = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

export const makeWordSet = async () => {
  let wordSet;
  let randomWord;
  await fetch(sevenLetterWords)
    .then((response) => response.text())
    .then((result) => {
      const array = result.split("\n");
      randomWord = array[Math.floor(Math.random() * array.length)];
      wordSet = new Set(array);
    });
  return { wordSet, randomWord };
};
