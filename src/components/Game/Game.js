import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import InputGuess from "../Game/InputGuess";
import Guess from './Guess';
import Banner from './Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [win, setWin] = useState(0)

  return (
      <>
          <Guess guesses={guesses} setGuesses={setGuesses} />
          <InputGuess guesses={guesses} setGuesses={setGuesses} answer={answer} win={win} setWin={setWin} />
          {!!win && <Banner win={win} guesses={guesses}/>}
          {(guesses.length === 6) && <Banner win={win} guesses={answer}/>}
      </>
  );
}

export default Game;
