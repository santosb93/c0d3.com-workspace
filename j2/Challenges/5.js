/**
 * Write a function called solution that takes in an array of 
 * functions and a number, and calls every function input milliseconds later

const func = () => {
  console.log('hello')
}
solution([func,func,func], 300) 
// console.log('hello') will be run 3 times, after 300ms
**/

/**
 * Write a function called solution that
 *   Takes in an array of functions and a number,
 *   and calls every function input milliseconds later
 * @param {array} arr
 * @param {number} time
 * @param {number} i
 */

 const solution = (arr, time, i = 0) => {
   if(i === arr.length) return
   setTimeout(()=>{
     arr[i]()
   },time)
   solution(arr, time, i + 1)
}

const func = () => {
  console.log('hello')
}
solution([func,func,func], 1000) 
// console.log('hello') will be run 3 times, after 300ms

