/**
 * Function that generates random integer number between mix and max
 *
 * @param min Number Minimum value for random generator function
 * @param max Number Maximum value for random generator function
 */
const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default getRandomNumber
