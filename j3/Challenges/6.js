/**
 * Write a function that takes in an array of numbers, and returns a new 
 * array of all duplicate numbers.

solution([1, 2, 2, 3, 1])  // should return [1, 2]
solution([1, 1, 1, 1, 2, 3, 3])  // should return [1, 3]
**/

const solution = (arr) => {

  const answer = arr.reduce((result, e)=>{
    if(result[0][e] === 1){
      result[1].push(e)
    }
    result[0][e] = (result[0][e] || 0) + 1
    return result
  },[{},[]])

  return answer[1]
  
}
console.log(solution([1, 2, 2, 3, 1]))  // should return [1, 2]
console.log(solution([1,2,3,4,5])) // should return []
console.log(solution([1, 2, 3, 2, 2, 3, 4, 4, 3])) //should return [2, 3, 4]
console.log(solution([23, 45, 12, 23, 44, 12, 45])) //should return [23, 12, 45]