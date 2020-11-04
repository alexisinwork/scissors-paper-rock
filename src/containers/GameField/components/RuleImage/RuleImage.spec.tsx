import React from 'react'
import { render, screen } from '@testing-library/react'
import { SCISSORS, ROCK, PAPER, RuleOption } from '../../rulesMap'
import RuleImage from './RuleImage'

const defaultProps = {
  option: undefined
}

/**
 * Rendering default Player and return all rendered elements
 *
 * @param {PlayerProps}
 */
const setup = ({ option }: { option: RuleOption | undefined }) => {
  const wrapper = render(<RuleImage option={option} />)

  return {
    ...wrapper
  }
}

describe('<RuleImage> has', () => {
  describe('image that', () => {
    it('renders by default', () => {
      setup(defaultProps)
      const imageEl = screen.getByAltText('default')
      expect(imageEl).toBeInTheDocument()
    })

    it('renders scissors image when option is scissors', () => {
      setup({ ...defaultProps, option: SCISSORS })
      const imageEl = screen.getByAltText(SCISSORS)
      expect(imageEl).toBeInTheDocument()
    })

    it('renders rock image when option is rock', () => {
      setup({ ...defaultProps, option: ROCK })
      const imageEl = screen.getByAltText(ROCK)
      expect(imageEl).toBeInTheDocument()
    })

    it('renders paper image when option is paper', () => {
      setup({ ...defaultProps, option: PAPER })
      const imageEl = screen.getByAltText(PAPER)
      expect(imageEl).toBeInTheDocument()
    })
  })
})
