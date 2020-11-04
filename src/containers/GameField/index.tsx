import React, { useEffect, useState, useCallback, useReducer } from 'react'
import Player from './components/Player/Player'
import rulesMap, { RuleOptions, RuleOption } from './rulesMap'
import calculateResult from '../../shared/utils/calculateGameResult'
import getRandomNumber from '../../shared/utils/getRandomNumber'
import setPlayerWin from '../../shared/utils/setPlayerWin'

import './index.css'

const localWin1 = Number(window.localStorage.getItem('1'))
const localWin2 = Number(window.localStorage.getItem('1'))

type StateProps = {
  player1: {
    option: RuleOption | undefined
    wins: number
  }
  player2: {
    option: RuleOption | undefined
    wins: number
  }
}

type StateAction = {
  type: string
  payload: StateProps
}

const initialState = {
  player1: {
    option: undefined,
    wins: localWin1
  },
  player2: {
    option: undefined,
    wins: localWin2
  }
}

const reducer = (state: StateProps, action: StateAction): StateProps => {
  if (action.type === 'update') {
    return {
      player1: action.payload.player1,
      player2: action.payload.player2
    }
  }

  return state
}

/**
 * Rendering players and field.
 * Responsible for the result calculation
 */
const GameField = (): React.ReactElement => {
  const [{ player1, player2 }, dispatch] = useReducer(reducer, initialState)

  const optionPlayer1 = player1.option
  const winsPlayer1 = player1.wins
  const optionPlayer2 = player2.option
  const winsPlayer2 = player2.wins
  console.log(player1, player2)
  const [isGameOver, setIsGameOver] = useState(false)
  const [result, setResult] = useState('')

  const onPlayerChose = (rule: RuleOption, player: number) => {
    // Get index of RulesOptions array from range(1, rulesMapKeysLength)
    const rulesLen = Object.keys(rulesMap).length
    const botDecision = RuleOptions[getRandomNumber(1, rulesLen)-1]

    dispatch({
      type: 'update',
      payload: {
        player1: { ...player1, option: player === 1 ? rule : botDecision },
        player2: { ...player2, option: player === 2 ? rule : botDecision }
      }
    })
  }

  const botPlay = () => {
    const rulesLen = Object.keys(rulesMap).length
    const botDecision = RuleOptions[getRandomNumber(1, rulesLen)-1]
    onPlayerChose(botDecision, 1)
  }

  const startOver = () => {
    dispatch({
      type: 'update',
      payload: {
        player1: { ...player1, option: undefined },
        player2: { ...player2, option: undefined }
      }
    })
    setIsGameOver(false)
  }

  const getResult = useCallback((): string => {
    const result = calculateResult(
      optionPlayer1 as RuleOption,
      optionPlayer2 as RuleOption
    )

    if (result === 1) {
      dispatch({
        type: 'update',
        payload: {
          player1: { ...player1, wins: player1.wins + 1 },
          player2
        }
      })
      console.log('triggered')
      setPlayerWin(result, winsPlayer1 + 1)
    }

    if (result === 2) {
      dispatch({
        type: 'update',
        payload: {
          player1,
          player2: { ...player2, wins: player2.wins + 1 },
        }
      })
      console.log('triggered 2')
      setPlayerWin(result, winsPlayer2 + 1)
    }

    setIsGameOver(true)

    return result === 0 ? 'Draw' : `Player ${result} won!`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionPlayer1, optionPlayer2])

  useEffect(() => {
    if (optionPlayer1 && optionPlayer2 && !isGameOver) {
      setResult(getResult())
    }
  }, [optionPlayer1, optionPlayer2, isGameOver, getResult])

  return (
    <div className="game-field">
      <h2 className="result" data-testid="result">
        {isGameOver ? result : 'Choose option!'}
      </h2>

      <div className="players">
        <Player
          testId={'player1'}
          name={'Player 1'}
          option={optionPlayer1}
          onOptionSelected={(rule: RuleOption) => onPlayerChose(rule, 1)}
          isGameOver={isGameOver}
          wins={winsPlayer1}
        />

        <Player
          testId={'player2'}
          name={'Player 2'}
          option={optionPlayer2}
          onOptionSelected={(rule: RuleOption) => onPlayerChose(rule, 2)}
          isGameOver={isGameOver}
          wins={winsPlayer2}
        />
      </div>

      <div className="controls">
        <button className="btn" onClick={() => startOver()}>
          Start again
        </button>

        <button className="btn" onClick={() => botPlay()}>
          Computer VS Computer
        </button>
      </div>
    </div>
  )
}

export default GameField
