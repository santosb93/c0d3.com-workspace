/**
 * Write a function called solution that takes in 2 parameters, a number and string and returns 
 * the string repeated input parameter number of times

result = solution(3, "abc") // "abcabcabc"
result = solution(0, "hello") // ""
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason
 */

/**
 * Write a function called solution that takes in 2 parameters, a number and string and returns 
 * the string repeated input parameter number of times
 * @param {number} num 
 * @param {string} str 
 * @param {number} counter
 * @param {number} result 
 * @returns {string} result
 */
const solution = (num, str, counter = 0, result = '') => {
    if(counter >= num) return result
    return solution(num, str, counter + 1, result + str)
}

//need a number called counter to repeat the function num times
//need a string called result to hold the resultant string
//first check if base case (if counter == num) return result
//if not, recursively call solution adding 1 to counter and the str to result

result = solution(3, "abc") // "abcabcabc"
console.log(result)
result = solution(0, "hello") // ""
console.log(result)
result = solution(-10, "hello") // ""
console.log(result)