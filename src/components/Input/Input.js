import React from "react";

function Input() {
  const [searchedWord, setSearchedWord] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(searchedWord);
        setSearchedWord("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letters word"
        value={searchedWord}
        onChange={(event) => setSearchedWord(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Input;
