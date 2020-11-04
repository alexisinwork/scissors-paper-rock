import React from 'react'
import { render } from '@testing-library/react'
import GameField from '.'

/**
 * Rendering default Player and return all rendered elements
 */
const setup = () => {
  const wrapper = render(<GameField />)

  const resultEl = wrapper.getByTestId('result')
  const selectEl1 = wrapper.getByTestId('player1-select')
  const selectEl2 = wrapper.getByTestId('player2-select')

  return {
    resultEl,
    selectEl1,
    selectEl2,
    ...wrapper
  }
}

describe('<GameField> has', () => {
  describe('header that', () => {
    it('renders Choose option by default', () => {
      const { resultEl } = setup()
      expect(resultEl).toHaveTextContent('Choose option!')
    })
  })
})
