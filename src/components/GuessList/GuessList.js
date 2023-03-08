import React from "react";
import { NUM_OF_GUESSES_ALLOWED, WORDS_LENGTH } from "../../constants";
import { range } from "../../utils";

function GuessList({ guesses }) {
  const numberOfGuesses = guesses.length;
  return (
    <div className="guess-results">
      {range(1, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p className="guess" key={i}>
          {range(1, WORDS_LENGTH).map((j) => (
            <span className="cell" key={j}>
              {numberOfGuesses < i ? "" : guesses[i - 1][j - 1]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
