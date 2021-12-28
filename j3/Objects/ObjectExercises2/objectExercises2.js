const objectExercises2 = {}


/**
 * Write a function called longestString that finds the longest value string in an object.
 * const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
const result = longestString(info) // result should be "arrogant"
 */
const longestString = (obj) => {

  const objArray = Object.values(obj)
  return objArray.reduce((str, e)=>{
    return e.length > str.length ? str = e: str
  }, '')

}

/**
 * Write a function called keyOfLongestString that finds the longest value string but returns its key.
 * const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
const result = keyOfLongestString(info) // result should be "ironman"
// because "arrogant" is longer than "naive" and "strong"

const info2 = {
  a: 'xxxxxx',
  bc: 'xx',
  abc: 'xxx'
}
const result2 = keyOfLongestString(info2) // result2 should be "a"
// "xxxxxx" is longer than "xx" and "xxx"
 *
*/
const keyOfLongestString = (obj) => {

  const longestValue = longestString(obj)
  const keysArray = Object.keys(obj)
  const longestKey = keysArray.reduce((str,e)=>{
    if(obj[e] === longestValue) str = e
    return str
  },undefined)

  return longestKey
  
}


/**
 * Use your keyOfLongestString function to write a function called removeLongestString.
 * const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
removeLongestString(info)
// info is changed to:
// {spiderman: "naive", hulk: "strong"}
 */
const removeLongestString = (obj) => {

  delete obj[keyOfLongestString(obj)]
  
}

/**
 * Write a function called commas that returns a string of all of an object's values separated by commas.
 * const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
const result = commas(info)
// result is 'arrogant, native, strong'
 */
const commas = (obj) => {

  return Object.values(obj).reduce((str, e, i, arr)=>{
    return str + e + ((i === arr.length - 1) ? '' : ', ')
  },'')

}

/**
 * Write a function called headers that joins all of an object's keys inside <h1> tags.
 * const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
const result = headers(info)
// result is '<h1>ironman</h1><h1>spiderman</h1><h1>hulk</h1>'
 */
const headers = (obj) => {

  return Object.keys(obj).reduce((str, e)=>{
    return str + `<div><h1>${e}</h1><h2>${obj[e]}</h2></div>`
  },'')

}


const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}

const result = headers(info)
console.log(result)
// result is 'arrogant, native, strong'
 
objectExercises2.headers = headers 
objectExercises2.commas = commas
objectExercises2.removeLongestString = removeLongestString
objectExercises2.keyOfLongestString = keyOfLongestString
objectExercises2.longestString = longestString

module.exports = objectExercises2