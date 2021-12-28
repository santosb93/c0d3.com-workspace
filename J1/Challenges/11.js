/**
 * Write a function called solution takes in 2 parameters, a number and a function, and returns a function.
 * When the returned function is called, the input function will execute after input number milliseconds.
 * @param {*} a 
 * @param {*} fun 
 * @returns 
 */
const solution = (a, fun) => {

  return () => {
    setTimeout(() => {
      fun()
    }, a)
  }
}

fun = solution(1800, () => {
  console.log('hello')
})

fun() // 'hello' will be printed out 1800ms after this function is called
fun() // 'hello' will be printed out 1800ms after this function is called