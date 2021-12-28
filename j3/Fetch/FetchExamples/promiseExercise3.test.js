jest.mock('node-fetch')
const fetch = require('node-fetch')
const data = require('./promiseExercise3')

describe('Countries', () => {
  it('should print the country with most cities', async () => {
    fetch.mockClear()
    console.log = jest.fn()
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => {
          return {
            results: [
              {
                name: 'Narnia',
                cities: 100
              },
              {
                name: 'SpaceJam',
                cities: 48
              },
              {
                name: 'Pluto',
                cities: 250
              },
              {
                name: 'Galaxy',
                cities: 20
              }
            ]
          }
        }
      })
    )
    await data.getCountries()
    expect(fetch.mock.calls.length).toEqual(1)
    expect(console.log.mock.calls[0][0]).toEqual('Pluto')
  })
})