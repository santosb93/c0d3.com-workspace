/**
 * Write a function called solution that takes in a function.

The function will be called with increasing indexes (starting from 0) until the input function returns false

solution((e) => {
  // this function will be run 7 times with e: 0,1,2,3,4,5,6
  return e < 6
})

solution((e) => {
  // this function will be run 1 time with e: 0
  return false
})

solution((e) => {
  // this function will be run 4 times with e: 0,1,2,3
  return e < 3
})
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason
 */

/**
 * Write a function called solution that takes in a function.
 * The function will be called with increasing indexes (starting from 0) until the input function returns false
 * @param {*} func 
 * @param {*} counter 
 * @returns 
 */
 const solution = (fun, i = 0) => {

  if(fun(i) === false) return
  
  solution(fun, i + 1)

}

solution((e) => {
  // this function will be run 7 times with e: 0,1,2,3,4,5,6
  return e < 6
})
solution((e) => {
  // this function will be run 1 time with e: 0
  return false
})


