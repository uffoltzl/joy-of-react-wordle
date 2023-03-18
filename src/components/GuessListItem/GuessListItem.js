import React from "react";
import { WORDS_LENGTH } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function GuessListItem({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);
  return (checkedGuess ?? range(1, WORDS_LENGTH + 1)).map((value, j) => (
    <span className={`cell${checkedGuess ? ` ${value.status}` : ""}`} key={j}>
      {checkedGuess ? value.letter : ""}
    </span>
  ));
}

export default GuessListItem;
