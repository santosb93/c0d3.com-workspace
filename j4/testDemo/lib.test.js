const lib = require('./lib.js')

describe('tokenize Function', () =>{
  it('should return an object and capitalize all strings',()=>{
    const result = lib.tokenize('hello world')
    expect(result).toEqual({HELLO: 1, WORLD: 1})
  })
  it('should return an empty object',()=>{
    const result = lib.tokenize('')
    expect(result).toEqual({})
  })
  it('it should ignore strings shorter than 3 characters', ()=>{
    const result = lib.tokenize('00')
    expect(result).toEqual({})
  })
  it('it should ignore numbers', ()=>{
    const result = lib.tokenize('Hello World 2000')
    expect(result).toEqual({HELLO: 1, WORLD: 1})
  })
  it('should tokenize "I like (Korean)"', () => {
    const result = lib.tokenize('I like (Korean)')
    expect(result).toEqual({ LIKE: 1, '(KOREAN)': 1 })
  })
})

describe('makeTraining Data function', ()=>{
  it('should return an empty array given an empty object',()=>{
    const result = lib.makeTrainingData({})
    expect(result).toEqual([])
  })
  it('given 2 objects it should make an array of 2 objects',()=>{
    const result = lib.makeTrainingData({
      'beef boneless 100': 'MEAT',
      'pink apples': 'VEGGIE'
    })
    expect(result.length).toEqual(2)
  })
  it('given 2 objects it should split the objects properly',()=>{
    const result = lib.makeTrainingData({
      'beef boneless 100': 'MEAT',
      'pink apples': 'VEGGIE'
    })
    expect(result).toEqual([
      {
      input: {
        BEEF: 1,
        BONELESS: 1
      },
      output: {
        MEAT: 1
      }
      }, 
      {
      input: {
        PINK: 1,
        APPLES: 1
      },
      output: {
        VEGGIE: 1
      }
      }])
  })
})

describe('function pushAll', ()=>{
  it('should not push array into {}', () => {
    const data = {}
    lib.pushAll(data, [9, 8, 7])
    expect(data).toEqual({})
  })
  it('should push array into object with 1 key, non-empty array', () => {
    const data = { blah: [['hello']] }
    lib.pushAll(data, [9, 8, 7])
    expect(data).toEqual({
      blah: [['hello'], [9, 8, 7]]
    })
  })
  it('should push array into object with 1 key, empty array', () => {
    const data = { blah: [] }
    lib.pushAll(data, [9, 8, 7])
    expect(data).toEqual({
      blah: [[9, 8, 7]]
    })
  })
  it('should push array into object with 2 keys with different array values', () => {
    const data = {
      blah: [['hello']],
      key2: []
    }
    lib.pushAll(data, [9, 8, 7])
    expect(data).toEqual({
      blah: [['hello'], [9, 8, 7]],
      key2: [[9, 8, 7]]
    })
  })
})


describe('getMostLikely Function', ()=>{
  it('should return null when given an empty object', ()=>{
    const result = lib.getMostLikely({})
    expect(result).toEqual(null)
  })
  it('should return the object key with the highest value', ()=>{
    const result = lib.getMostLikely({
      meat: 0.987,
      veggie: 0.187,
      store: 0.287
    })
    expect(result).toEqual('meat')
  })
  it('should ignore any non number values', ()=> {
    const result = lib.getMostLikely({
      meat: 0.287,
      veggie: 'HELLO',
      store: 0.987
    })
    expect(result).toEqual('store')
  })






})