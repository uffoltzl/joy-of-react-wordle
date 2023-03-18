import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import LoseBanner from "../LoseBanner/LoseBanner";
import WinBanner from "../WinBanner/WinBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("in-progress");

  const handleSubmit = (guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === answer) {
      setGameStatus("win");
    }
    if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
  };

  if (gameStatus === "in-progress") {
    return (
      <>
        <GuessInput addGuess={handleSubmit} />
        <GuessList guesses={guesses} answer={answer} />
      </>
    );
  }

  if (gameStatus === "lose") {
    return <LoseBanner answer={answer} />;
  }

  if (gameStatus === "win") {
    return <WinBanner numberOfGuesses={guesses.length} />;
  }
}

export default Game;
