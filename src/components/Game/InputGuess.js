import React from "react"

import { checkGuess } from "../../game-helpers";

export default function InputGuess({ guesses, setGuesses, answer, win, setWin }) {
    const [input, setInput] = React.useState("");
    
    return (
        <form 
            className="guess-input-wrapper"
            onSubmit={(event) => {
                event.preventDefault();
                input.toUpperCase();

                const guessesObject = checkGuess(input, answer);

                input.toUpperCase() === answer ? setWin(1) : setWin(0)

                let newGuesses = [...guesses, guessesObject];
                setGuesses(newGuesses);

                setInput("");
            }
            }
            >
            <label for="guess-input">Enter guess:</label>
            <input 
                id="guess-input"
                type="text"
                minLength="5"
                maxLength="5"
                disabled={guesses.length === 6 || !!win}
                value={input}
                onChange={(event) => {
                    setInput(event.target.value)
                }}
                />
        </form>
    )
}