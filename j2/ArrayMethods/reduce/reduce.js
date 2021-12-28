const reduce = {}



/**
 * 
 * Write a function called sum that adds up all the elements of an array.
 */
const sum = (arr) => {

  return arr.reduce((sum, e)=>{
    return sum + e
  }, 0)

}

  /**
   *  Write a function named largest that returns the largest number in an array.
   * @param {array} arr 
   * 
   */

  const largest = (arr) => {

    return arr.reduce((max, e)=>{
      return (e > max) ? e : max
    }, 0)

  }


  /**
   * Write a function called longest that returns the longest string out of an array of strings.
   */
const longest = (arr) => {

  return arr.reduce((acc, e)=> {
    return (e.length > acc.length) ? e : acc
  }, arr[0])

}

/**
 * Write a function called matches that counts the how many times a given element occurs in an array.
 */
const matches = (arr, str) => {

  return arr.reduce((acc, e)=>{
    return (e === str) ? acc + 1 : acc
  }, 0)
}

/**
 * Write a function called combineLess5 that takes in an array of strings, and returns a combined string of
 * all strings with length < 5.
 */
const combineLess5 = (arr) => {
  return arr.reduce((acc, e)=>{
    return (e.length < 5) ? (acc + e) : acc
  }, '')

}

/**
 * Write a function called largerThan5 that takes in an array
 * ,and returns an array of numbers larger than 5.
 */

const largerThan5 = (arr) => {

  return arr.reduce((acc, e)=>{
    if (e > 5) acc.push(e)
    return acc
  },[])
}
reduce.largerThan5 = largerThan5
reduce.combineLess5 = combineLess5
reduce.matches = matches
reduce.longest = longest
reduce.sum = sum
reduce.largest = largest

module.exports = reduce