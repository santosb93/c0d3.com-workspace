const helpers = require('./helpers')

describe('sumAll function', () => {
  it('should add numbers', () => {
    const result = helpers.sumAll([9, 8, 7])
    expect(result).toEqual(24)
  })

  it('should add strings', () => {
    const result = helpers.sumAll(['hello', 'happy', 'world'])
    expect(result).toEqual('hellohappyworld')
  })

  it('should not change original array', () => {
    const original = ['hello', 'happy', 'world']
    const result = helpers.sumAll(original)
    expect(result).toEqual('hellohappyworld')
    expect(original).toEqual(['hello', 'happy', 'world'])
  })

  it('should return 0 if empty array', () => {
    const result = helpers.sumAll([])
    expect(result).toEqual(0) // This is arbitrary.
    // You could have picked anything to address the empty array case.
  })
})

describe('findLargest number', () => {
  it('should find the largest number from array with all negatives', () => {
        const result = helpers.findLargest([-10, -1, -19])
    expect(result).toEqual(-1)
  })
  it('should return 0 if empty array', ()=> {
    const result = helpers.findLargest([])
    expect(result).toEqual(0)
  })
  it('should ignore non number types', () => {
    const result = helpers.findLargest(['hi',-1,1,3,{},[]])
    expect(result).toEqual(3)
  })
})