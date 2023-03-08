import React from "react";
import { WORDS_LENGTH } from "../../constants";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={WORDS_LENGTH}
        pattern={`[a-zA-Z]{${WORDS_LENGTH}}`}
        title="5 letters word"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
