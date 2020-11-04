import rulesMap, { RuleOption } from '../../containers/GameField/rulesMap'

const calculateResult = (
  optionPlayer1: RuleOption,
  optionPlayer2: RuleOption
): number => {
  let decision = 0
  const player1Choice = rulesMap[optionPlayer1]
  const player2Choice = rulesMap[optionPlayer2]

  if (player1Choice.value === player2Choice.value) {
  }

  if (player1Choice.winTo.includes(player2Choice.value)) {
    decision = 1
  }

  if (player2Choice.winTo.includes(player1Choice.value)) {
    decision = 2
  }

  return decision
  // eslint-disable-next-line react-hooks/exhaustive-deps
}

export default calculateResult
