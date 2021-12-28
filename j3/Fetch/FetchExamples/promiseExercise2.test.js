jest.mock('node-fetch')
jest.mock('fs')
const fetch = require('node-fetch')
const fs = require('fs')
const pokemonNames = require('./promiseExercise2')


describe('Pokemons', () => {
  it('should print only two pokemon names', async () => {
    fetch.mockClear()
    fs.writeFile = jest.fn()
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => {
          return {
            results: [{ name: 'testing1' }, { name: 'testing2' }]
          }
        }
      })
    )
    await pokemonNames.getPokemons()
    expect(fetch.mock.calls.length).toEqual(1)
    console.log(fs.writeFileSync.mock.calls)
    expect(fs.writeFile.mock.calls[0][1]).toEqual(
      '<h1>testing1</h1><h1>testing2</h1>'
    )
  })
})