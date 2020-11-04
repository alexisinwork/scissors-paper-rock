/**
 * setPlayerWin in localStorage
 *
 * @param {string} player Player number
 * @param {string} counter Updated counter of the wins
 */
const setPlayerWin = (player: number, counter: number): void => {
  window.localStorage.setItem(String(player), String(counter))
}

export default setPlayerWin
