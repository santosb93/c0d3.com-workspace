/*
 * 2sum: write a function that takes in an array of numbers and a number,
   and returns true if any pairs add up to the number.
   solution([1,2,22,333,23], 25)   // returns true
    solution([1,2,22,333,23], 24)   // returns true
 * (The numbers in the array is not unique, meaning there may be duplicate numbers)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num) =>{
  const answer = arr.reduce((result,e)=>{
    if(result[0][num - e]) result[1] = true
    result[0][e] = true
    return result
  },[{}, false])

  return answer[1]

}

/*
const solution = (arr, num, counter = 0) => {
  
  if(counter === arr.length) return false

  const isTrue = arr.reduce((result,e,i, arr)=>{
    if(i === counter) return result
    if(e + arr[counter] === num) result = true
    return result
  },false)

  if(isTrue) return true
  
  return solution(arr,num, counter + 1)
}
*/

console.log(solution([],0)) //returns false
console.log(solution([1,4,3,2],6)) //returns true
console.log(solution([-1,-3,-4],-2)) //returns false
console.log(solution([0,0,0], 0)) // returns true
console.log(solution([1,2,22,333,23], 25))   // returns true


// [1,2,22,33,23]