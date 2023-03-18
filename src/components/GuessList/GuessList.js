import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessListItem from "../GuessListItem/GuessListItem";

function GuessList({ guesses, answer }) {
  const numberOfGuesses = guesses.length;
  return (
    <div className="guess-results">
      {range(1, NUM_OF_GUESSES_ALLOWED + 1).map((i) => (
        <p className="guess" key={i}>
          <GuessListItem
            guess={numberOfGuesses < i ? undefined : guesses[i - 1]}
            answer={answer}
          />
        </p>
      ))}
    </div>
  );
}

export default GuessList;
