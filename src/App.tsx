import React from 'react'
import GameField from './containers/GameField'

/**
 * Entry of the app
 */
const App = (): React.ReactElement => {
  return (
    <div className="App">
      <header className="App-header">Rock, Paper, Scissors</header>

      <GameField />
    </div>
  )
}

export default App
