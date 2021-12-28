const map = {}


/**
 * Write a function called oddToZero that copies an array
 *  while turning all odd elements to 0.
 **/
const oddToZero = (arr) => {

  return arr.map((elem) => {
    return (elem % 2) ? 0 : elem
  })

}

/**
 * Write a function called firstLetters
 * that returns the first letter of each string in an array of strings.
 * 1.param arr
 * 2. use map to iterate through each string
 * 3. the call back function will access each strings [0] element and return the value
 * 
 * Ex: firstLetters([]) //returns []
 *     firstLetters(["hi", "bye"]) //returns ["h", "b"]
 * 
 *
 * 
 * @param {array} arr 
 * @returns {array}
 */
const firstLetters = (arr) => {

  return arr.map((e) => {
    return e[0]
  })

}

/**
 *  Write a function named firstXToZero
 * that sets the value of the first X elements in an array to 0, where X is the input number.
 * 
 * param arr, num
 * 1. use map to iterate through the array
 * 2. the call back fn will have two parameters: e, i
 * 3. if i < num return 0, otherwise return e
 * 
 * ex firstXToZero([], 0) returns //[]
 *    firstXtoZero([1,2,3], 2) returns //[0,0,3]
 *    firstXtoZero([1,2,3], -1) returns //[1,2,3]
 */
const firstXToZero = (arr, num) => {
  return arr.map((e,i) => {
    return (i < num) ? 0 : e
  })
}


const isPrime = (num, i = 2) => {
  if(num < i) return false
  if(i === num) return true
  if(num % i === 0) return false
  return isPrime(num, i + 1)
}

/**
 * Write a function called nonPrimeToZero that copies an array 
 * while changing any number that isn't prime to 0.
 * 
 * param arr
 * 1. use map to iterate through the elems of arr
 * 2. if isPrime(e) ? 0 : e
 * 
 * nonPrimeToZero([0,1,2,3]) //returns [0,0,2,3]
 * nonPrimeToZero([]) // returns []
 * nonPrimeToZero([4,5,6]) returns //[6]
 */
const nonPrimeToZero = (arr) => {
  return arr.map( (e) => {
    return isPrime(e) ? e : 0
  })
}


/**
 * Write a function called append that copies an array of 
 * strings while adding a string to every string in it.
 * 
 * two params (arr, str)
 * 
 * use map to iterrate through each e of arr
 * the callback function will return e + str
 * 
 * append(["hi", "bye"], " there") //["hi there", "bye there"]
 * append(["hi"], "") // ["hi"]
 * append([], "there") //[]
 * 
 * 
 * @param {array} arr 
 * @param {string} str 
 * @returns {array}
 */
const append = (arr, str) => {
  return arr.map((e) => {
    return e + str
  })
}

/**
 * Write a function called clone that makes an exact duplicate of an array
 * use map to return each e of the array
 * 
 * @param {array} arr
 * @returns {array} 
 */
const clone = (arr) => {
  return arr.map(e => e)

}
console.log(clone([0,1,2]))

map.clone = clone
map.append = append 
map.nonPrimeToZero = nonPrimeToZero
map.firstXToZero = firstXToZero
map.firstLetters = firstLetters 
map.oddToZero = oddToZero
module.exports = map