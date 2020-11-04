// Add contants of the options for rules here
export const SCISSORS = 'scissors'
export const PAPER = 'paper'
export const ROCK = 'rock'

export const RuleOptions: Array<RuleOption> = [ROCK, PAPER, SCISSORS]

export type RuleOption = 'scissors' | 'paper' | 'rock'

type RulesMap = {
  [field in RuleOption]: {
    value: number
    loseTo: Array<number>
    winTo: Array<number>
  }
}

/**
 * Rules map is responsible for storing all game options
 * like what is beating what
 */
const rulesMap: RulesMap = {
  [SCISSORS]: {
    value: 1,
    loseTo: [3],
    winTo: [2]
  },
  [PAPER]: {
    value: 2,
    loseTo: [1],
    winTo: [3]
  },
  [ROCK]: {
    value: 3,
    loseTo: [2],
    winTo: [1]
  }
}

/**
 * Return new set of rules with extended options
 *
 * @param newRules
 * @returns New rules <Rules> with extended options
 */
export const extendRulesWithOptions = (newRules: RulesMap): RulesMap => {
  return { ...rulesMap, ...newRules }
}

export default rulesMap
