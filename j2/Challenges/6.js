/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} arr
 * @param {number} time
 * @param {number} i 
 */

 const solution = (arr, time, i = 0) => {
  if(i === arr.length) return
  setTimeout(()=>{
    arr[i]()
    solution(arr, time, i + 1)
  },time)
}


const func = () => {
  console.log('hello')
}
solution([func,func,func], 1000) 
// console.log('hello') will be run 3 times, after 300ms
