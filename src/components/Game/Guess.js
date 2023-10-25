import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guesses, setGuesses }) {
  const diff = NUM_OF_GUESSES_ALLOWED - guesses.length

  return (
      <div className="guess-results">
          {guesses.map((guess, guessesIndex) => (
              <p 
                className="guess" 
                key={guessesIndex}>
                  {guess.map((letter, guessIndex) => (
                      <span
                          className={`cell ${letter.status}`}
                          key={guessIndex}
                      >
                          {letter.letter}
                      </span>
                  ))
                  }
              </p>
          ))}
          {Array.apply(null, { length: diff }).map((val, index) => (
              <p className="guess" key={index}>
                  {Array.apply(null, { length: 5 }).map((val, index) => (
                      <span className="cell" key={index}></span>
                  ))}
              </p>
          ))}
      </div>
  );
}

export default Guess;
