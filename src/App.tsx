import React from 'react'
import GameField from './containers/GameField'

/**
 * Entry of the app
 */
const App = (): React.ReactElement => {
  return (
    <div className="App">
      <h1 className="App-header">Rock, Paper, Scissors</h1>

      <GameField />
    </div>
  )
}

export default App
