import getRandomNumber from './getRandomNumber'

describe('getRandomNumber', () => {
  it(`return random number in range (1,3)`, () => {
    const num = getRandomNumber(1, 3)
    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(3)
  })

  it(`return random number in range (1,5)`, () => {
    const num = getRandomNumber(1, 5)
    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(5)
  })

  it(`return random number in range (1,10)`, () => {
    const num = getRandomNumber(1, 10)
    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(10)
  })

  it(`return random number in range (1,20)`, () => {
    const num = getRandomNumber(1, 20)
    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(20)
  })
})
