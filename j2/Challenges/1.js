/**
 * Write a function called solution that takes in a number and 
 * returns an array with the length equal to the input number.

Every element in the array must numbered with the correct index: 0,1,2,3,4...

solution(5) // returns [0,1,2,3,4]
solution(3) // returns [0,1,2]

params (num, index = 0, result = [])
basecase if index >== num return result
otherwise result.push(i)
return the recursive call solution(num, index + 1, result)
 */

/**
 * 
 * @param {number} num 
 * @param {number} i 
 * @param {array} result 
 * @returns {array}
 */
const solution = (num, i = 0, result = []) => {
  if(i >= num) return result
  result.push(i)
  return solution(num, i + 1, result)
}

console.log(solution(5))
console.log(solution(3))
