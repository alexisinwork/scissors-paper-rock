import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Player, { PlayerProps } from './Player'
import { SCISSORS, ROCK, PAPER } from '../../rulesMap'
import toCapitalize from '../../../../shared/utils/toCapitalize'

const defaultProps: PlayerProps = {
  testId: 'player1',
  name: 'Player 1',
  option: undefined,
  onOptionSelected: Function,
  wins: 0
}

/**
 * Rendering default Player and return all rendered elements
 *
 * @param {PlayerProps}
 */
const setup = ({ testId, name, option, wins }: PlayerProps) => {
  const onOptionSelected = jest.fn()

  const wrapper = render(
    <Player
      testId={testId}
      name={name}
      option={option}
      onOptionSelected={onOptionSelected}
      wins={wins}
    />
  )

  const selectEl = wrapper.getByTestId(`${testId}-select`)
  const optionEls = wrapper.getAllByTestId(`${testId}-option`)
  const nameEl = wrapper.getByTestId(`${testId}-name`)
  const winsEl = wrapper.getByTestId(`${testId}-wins`)

  return {
    selectEl,
    optionEls,
    nameEl,
    winsEl,
    onOptionSelected,
    ...wrapper
  }
}

describe('<Player> has', () => {
  describe('options that are', () => {
    it('renders', () => {
      const { optionEls } = setup(defaultProps)
      expect(optionEls).toHaveLength(3)
    })

    it(`renders ${ROCK} option`, () => {
      const { optionEls } = setup(defaultProps)
      expect(optionEls[0]).toHaveTextContent(toCapitalize(ROCK))
    })

    it(`renders ${PAPER} option`, () => {
      const { optionEls } = setup(defaultProps)
      expect(optionEls[1]).toHaveTextContent(toCapitalize(PAPER))
    })

    it(`renders ${SCISSORS} option`, () => {
      const { optionEls } = setup(defaultProps)
      expect(optionEls[2]).toHaveTextContent(toCapitalize(SCISSORS))
    })

    it('changes on select with correct value', () => {
      const { selectEl, onOptionSelected } = setup(defaultProps)
      fireEvent.change(selectEl, { target: { value: SCISSORS }})
      expect(onOptionSelected).toHaveBeenCalled()
    })
  })

  describe('name that', () => {
    it('renders', () => {
      const { nameEl } = setup({ ...defaultProps, name: 'Playerinho #1' })
      expect(nameEl).toHaveTextContent('Playerinho #1')
    })
  })

  describe('wins that is', () => {
    it('renders', () => {
      const { winsEl } = setup({ ...defaultProps, wins: 1 })
      expect(winsEl).toHaveTextContent('Wins: 1')
    })
  })
})
