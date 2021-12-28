//need an index called i set at 0 to iterate through the string
//i will increase until the end of the string in which it will change back to 0 on the next call
//at each index, return a function that first checks if i === str.length otherwise it returns
//func(str[i]) and increments after

/**
 * 
 * Write a function called solution that takes in 2 parameters, a string and a function, and returns a function.
 * When the returned function is called for the first time, the input function will be called 
 * with the first character of the string.
 *  When the returned function is called for the second time, the input function will be
 * called with the second character of the string.
 *
 * After the input function is called with the last character of the string,
 * calling the returned function will repeat #1, then #2, etc.
 * @param {string} str 
 * @param {function} fun 
 * @returns undefined 
 */
const solution = (str, fun) => {
  let i = 0
  return () => {
    if(i === str.length) i = 0
    return fun(str[i++])
  }
}

fun = solution('hel2', (e) => {
  console.log(e)
})

fun() // prints-> 'h'
fun() // prints-> 'e'
fun() // prints-> 'l'
fun() // prints-> '2'
fun() // prints-> 'h'
fun() // prints-> 'e'