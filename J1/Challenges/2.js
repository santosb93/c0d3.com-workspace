/**
 * Whenever the returned function is called, it returns whatever the input function returns.
After the returned function has been called up to the first parameter number of times, calling returned function will always return null.

resf = solution(3, () => {
  return "hello"
})
result = resf() // "hello"
result = resf() // "hello"
result = resf() // "hello"
result = resf() // null
...
result = resf() // null

resf = solution(1, () => {
  return 100
})
result = resf() // 100
result = resf() // null
...
result = resf() // null
 */

/**
 * Whenever the returned function is called, it returns whatever the input function returns.
 * After the returned function has been called up to the first parameter number of times, calling 
 * returned function will always return null.
 * @param {number} num 
 * @param {function} func 
 * @returns {number}
 */
const solution = (num, func) =>{
  counter = 0
  return () => {
    counter++
    if(counter > num) return null
    return func();
  }
}



