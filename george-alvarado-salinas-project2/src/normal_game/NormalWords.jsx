import sixLetterWords from "./six_letter_words.txt";
export const normalBoardDefault = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

export const makeWordSet = async () => {
  let wordSet;
  let randomWord;
  await fetch(sixLetterWords)
    .then((response) => response.text())
    .then((result) => {
      const array = result.split("\n");
      randomWord = array[Math.floor(Math.random() * array.length)];
      wordSet = new Set(array);
    });
  return { wordSet, randomWord };
};
