import React from 'react'
import { render } from '@testing-library/react'
import GameField from '.'

describe('<App> is', () => {
  it('rendering', () => {
    const wrapper = render(<GameField />)
    const linkElement = wrapper.getByText(/Rock, Paper, Scissors/i)

    expect(linkElement).toBeInTheDocument()
  })
})
