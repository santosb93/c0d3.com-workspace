const fn = require('./objectExercises4.js')

describe('getNext function', () => {
  it('should iterate through 3 elements', () => {
    const arr = ['Edna', 'Optimus', 'Minion']
    let result = arr.getNext()
    expect(result).toEqual('Edna')
    expect(arr.getNext()).toEqual('Optimus')
    expect(arr.getNext()).toEqual('Minion')
  })
  it('should return to beginning once done', () => {
    const arr = [9, 80, 12, 2]
    expect(arr.getNext()).toEqual(9)
    expect(arr.getNext()).toEqual(80)
    expect(arr.getNext()).toEqual(12)
    expect(arr.getNext()).toEqual(2)
    expect(arr.getNext()).toEqual(9)
    expect(arr.getNext()).toEqual(80)
  })
  it('should return undefined for an empty array', () => {
    const arr = []
    expect(arr.getNext()).toEqual(undefined)
  })
  it('should iterate through one element', () => {
    const arr = ['Ironman']
    expect(arr.getNext()).toEqual('Ironman')
    expect(arr.getNext()).toEqual('Ironman')
  })
  it(`shouldn't iterate`, () => {
    const arr = []
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
  })
})

describe('getNext function', () => {
  it('should iterate through 3 elements', () => {
    const arr = ['Edna', 'Optimus', 'Minion']
    let result = arr.getNext()
    expect(result).toEqual('Edna')
    expect(arr.getNext()).toEqual('Optimus')
    expect(arr.getNext()).toEqual('Minion')
  })
  it('should return to beginning once done', () => {
    const arr = [9, 80, 12, 2]
    expect(arr.getNext()).toEqual(9)
    expect(arr.getNext()).toEqual(80)
    expect(arr.getNext()).toEqual(12)
    expect(arr.getNext()).toEqual(2)
    expect(arr.getNext()).toEqual(9)
    expect(arr.getNext()).toEqual(80)
  })
  it('should return undefined for an empty array', () => {
    const arr = []
    expect(arr.getNext()).toEqual(undefined)
  })
  it('should iterate through one element', () => {
    const arr = ['Ironman']
    expect(arr.getNext()).toEqual('Ironman')
    expect(arr.getNext()).toEqual('Ironman')
  })
  it(`shouldn't iterate`, () => {
    const arr = []
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
    expect(arr.getNext()).toEqual()
  })
})

describe('tiredForEach function', () => {
  jest.useFakeTimers()
  it('should call callback immediately when not tired', () => {
    const callback = jest.fn()
    const arr = ['Edna', 'Optimus', 'Minion']
    arr.tiredForEach(callback, 200)
    expect(callback).toHaveBeenCalled()
  })
  it('should not run function before time has passed', () => {
    const callback = jest.fn()
    const callback2 = jest.fn()
    const arr = ['Edna', 'Optimus', 'Minion']
    arr.tiredForEach(callback, 200)
    arr.tiredForEach(callback2, 200)
    expect(callback2).not.toHaveBeenCalled()
  })
  it('should work again once time has passed', () => {
    const callback = jest.fn()
    const arr = ['Edna', 'Optimus', 'Minion']
    arr.tiredForEach(callback, 200)
    jest.advanceTimersByTime(200)
    arr.tiredForEach(callback, 200)
    expect(callback).toHaveBeenCalledTimes(6)
  })
})