/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @param {number} i
 * @param {array} result
 * @returns {array}
 */

 const solution = (fun, i = 0, result = []) => {
   if(fun(i)) return result
   result.push(i)
  return solution(fun, i+1, result)
}


console.log(solution((e) => {
  return e > 10
}))// returns [0,1,2,3,4,5,6,7,8,9,10]

console.log(solution((e) => {
  return true
})) // returns []

console.log(solution((e) => {
  return e % 7 === 0 && e !== 0
})) // returns [0,1,2,3,4,5,6]

