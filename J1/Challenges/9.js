/**
 * Write a function called solution that takes in 2 parameters, 
 * a string and a function, and returns combined result of the function 
 * being called with every character in the string.

fun = (e) => {
  return '9'
}
result = solution('hello', fun) // "99999"

fun = (e) => {
  return e + '123'
}
result = solution('blah', fun) // "b123l123a123h123"
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason 
 */

//need param to take user input string an function
//need param to recursively call solution until the end of the string
//basecase if the recursive call reaches the ned of the string
//first check base case, if basecase is true return the result
//if not recursively call solution adding 1 to counter and adding user func call with str[counter] as a parameter



/**
 * Write a function called solution that takes in 2 parameters, 
 * a string and a function, and returns combined result of the function 
 * being called with every character in the string.
 * @param {string} str 
 * @param {function} func 
 * @param {number} counter 
 * @param {string} result
 * @returns {string}
 */
const solution = (str, func, result = '', i = 0) =>{

  if(i >= str.length) return result

  return solution(str, func, result + func(str[i]),i + 1)
  
}

fun = (e) => {
  return '9'
}
result = solution('hello', fun) // "99999"
console.log(result)
fun = (e) => {
  return e + '123'
}
result = solution('blah', fun) // "b123l123a123h123"
console.log(result)