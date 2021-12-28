const fn = require('./objectExercises2.js')

describe('longestString function', () => {
  it('should find the longest string from the beginning of an object', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.longestString(info)).toEqual('arrogant')
  })
  it('should find the longest string from the end of an object', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    expect(fn.longestString(leaders)).toEqual('Sabrina')
  })
  it('should return the empty string for an empty object', () => {
    expect(fn.longestString({})).toEqual('')
  })
})

describe('keyOfLongestString function', () => {
  it('should find key of longest string in the beginning of an object', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.keyOfLongestString(info)).toEqual('ironman')
  })
  it('should find key of longest string at the end of an object', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    expect(fn.keyOfLongestString(leaders)).toEqual('saffron')
  })
  it('should return undefined (no key) for an empty object', () => {
    expect(fn.keyOfLongestString({})).toEqual(undefined)
  })
})

describe('removeLongestString function', () => {
  it('should remove the longest string in the beginning of an object', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    fn.removeLongestString(info)
    expect(info).toEqual({ spiderman: 'naive', hulk: 'strong' })
  })
  it('should remove the longest string at the end of an object', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    fn.removeLongestString(leaders)
    expect(leaders).toEqual({
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga'
    })
  })
  it('should work on an empty object', () => {
    const imEmpty = {}
    fn.removeLongestString(imEmpty)
    expect(imEmpty).toEqual({})
  })
})
describe('commas function', () => {
  it('should separate three items', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    expect(fn.commas(info)).toEqual('arrogant, naive, strong')
  })
  it('should put no commas if only one element', () => {
    expect(fn.commas(['funny'])).toEqual('funny')
  })
  it('should return an empty string if no elements', () => {
    expect(fn.commas([])).toEqual('')
  })
})

describe('headers function (part 3)', () => {
  it('should create h1s for 3 items', () => {
    const info = {
      ironman: 'arrogant',
      spiderman: 'naive',
      hulk: 'strong'
    }
    const exp =
      '<div><h1>ironman</h1><h2>arrogant</h2></div>\
<div><h1>spiderman</h1><h2>naive</h2></div>\
<div><h1>hulk</h1><h2>strong</h2></div>'
    expect(fn.headers(info)).toEqual(exp)
  })
  it('should create headers for 4 elements', () => {
    const leaders = {
      vermilion: 'Surge',
      cinnabar: 'Blaine',
      fuchsia: 'Koga',
      saffron: 'Sabrina'
    }
    const exp =
      '<div><h1>vermilion</h1><h2>Surge</h2></div>\
<div><h1>cinnabar</h1><h2>Blaine</h2></div>\
<div><h1>fuchsia</h1><h2>Koga</h2></div>\
<div><h1>saffron</h1><h2>Sabrina</h2></div>'
    expect(fn.headers(leaders)).toEqual(exp)
  })
  it('should return an empty string if no elements', () => {
    expect(fn.headers([])).toEqual('')
  })
})

