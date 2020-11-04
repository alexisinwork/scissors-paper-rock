import toCapitalize from './toCapitalize'

describe('toCapitalize', () => {
  it('transforms word to toCapitalize', () => {
    expect(toCapitalize('chakalaka')).toEqual('Chakalaka')
  })
})
