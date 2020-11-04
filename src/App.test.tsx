import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('<App> is', () => {
  it('rendering', () => {
    const wrapper = render(<App />)
    const header = wrapper.getByText(/Rock, Paper, Scissors/i)

    expect(header).toBeInTheDocument()
  })
})
