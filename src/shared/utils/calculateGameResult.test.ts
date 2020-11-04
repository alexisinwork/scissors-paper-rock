import { ROCK, PAPER, SCISSORS } from '../../containers/GameField/rulesMap'
import calculateResult from './calculateGameResult'

describe('calculateResult is returning', () => {
  it('0 if there 2 rock', () => {
    const result = calculateResult(ROCK, ROCK)
    expect(result).toEqual(0)
  })

  it('0 if there 2 paper', () => {
    const result = calculateResult(PAPER, PAPER)
    expect(result).toEqual(0)
  })

  it('0 if there 2 scissor', () => {
    const result = calculateResult(SCISSORS, SCISSORS)
    expect(result).toEqual(0)
  })

  it('1 is there rock -> scissors', () => {
    const result = calculateResult(ROCK, SCISSORS)
    expect(result).toEqual(1)
  })

  it('1 is there scissors -> paper', () => {
    const result = calculateResult(SCISSORS, PAPER)
    expect(result).toEqual(1)
  })

  it('1 is there paper -> rock', () => {
    const result = calculateResult(PAPER, ROCK)
    expect(result).toEqual(1)
  })

  it('2 is there rock -> paper', () => {
    const result = calculateResult(ROCK, PAPER)
    expect(result).toEqual(2)
  })

  it('2 is there paper -> scissors', () => {
    const result = calculateResult(PAPER, SCISSORS)
    expect(result).toEqual(2)
  })
  it('2 is there scissors -> rock', () => {
    const result = calculateResult(SCISSORS, ROCK)
    expect(result).toEqual(2)
  })
})
