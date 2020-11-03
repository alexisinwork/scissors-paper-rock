/**
 * Function that generates random integer number between mix and max
 *
 * @param min Number Minimum value for random generator function
 * @param max Number Maximum value for random generator function
 */
const randomNumber = (min: number, max: number): number => {
  const ceil = Math.ceil(min)
  const floor = Math.floor(max)
  return Math.floor(Math.random() * (ceil - floor + 1)) + ceil
}

export default randomNumber
