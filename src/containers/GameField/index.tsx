import React, { useEffect, useState, useCallback } from 'react'
import Player from './components/Player/Player'
import rulesMap, { RuleOption } from './rulesMap'

import './index.css'
// import getRandomNumber from '../../utils/getRandomNumber'
/**
 * Rendering players and field
 */
const GameField = (): React.ReactElement => {
  const [optionPlayer1, setOptionPlayer1] = useState<RuleOption | undefined>()
  const [winsPlayer1, setWinsPlayer1] = useState(0)

  const [optionPlayer2, setOptionPlayer2] = useState<RuleOption | undefined>()
  const [winsPlayer2, setWinsPlayer2] = useState(0)

  const [isPlayer1AI, set1AI] = useState(false)
  const [isPlayer2AI, set2AI] = useState(false)

  const calculateResult = useCallback(() => {
    let decision
    const player1Choice = rulesMap[optionPlayer1 as RuleOption]
    const player2Choice = rulesMap[optionPlayer2 as RuleOption]

    if (player1Choice.value === player2Choice.value) {
      decision = 'Draw'
    }

    if (player1Choice.winTo.includes(player2Choice.value)) {
      setWinsPlayer1(winsPlayer1 + 1)
      decision = 'Player 1 won!'
    }

    if (player2Choice.winTo.includes(player1Choice.value)) {
      setWinsPlayer2(winsPlayer2 + 1)
      decision = 'Player 2 won!'
    }

    setOptionPlayer1(undefined)
    setOptionPlayer2(undefined)
    return decision
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionPlayer1, optionPlayer2])

  useEffect(() => {
    if (optionPlayer1 && optionPlayer2) {
      calculateResult()
    }
  }, [optionPlayer1, optionPlayer2, calculateResult])

  return (
    <div className="game-field">
      <div className="players">
        <Player
          testId={'player1'}
          name={'Player 1'}
          option={optionPlayer1}
          onOptionSelected={(rule: RuleOption) => setOptionPlayer1(rule)}
          wins={winsPlayer1}
        />

        <Player
          testId={'player2'}
          name={'Player 2'}
          option={optionPlayer2}
          onOptionSelected={(rule: RuleOption) => setOptionPlayer2(rule)}
          wins={winsPlayer2}
        />
      </div>
    </div>
  )
}

export default GameField
