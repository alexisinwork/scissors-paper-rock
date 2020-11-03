import React from 'react'
// import getRandomNumber from '../../utils/getRandomNumber'
import rulesMap, { SCISSORS, PAPER, ROCK } from './rulesMap'

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

const GameField = (): React.ReactElement => {
  console.log(rulesMap, SCISSORS, PAPER, ROCK)

  return (
    <div className="game-field">
      <header className="game-header">123</header>
    </div>
  )
}

export default GameField
