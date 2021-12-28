/**
 * Write a function called solution that takes in 2 parameters, a string and a letter, and
 *  returns true if the character exists in the string, false if the character does not exist in the string.
 *
result = solution('abc', 'a') // true
result = solution('abc', 'd') // false
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason 
*/


//need a param to hold string 
//need a param to hold letter
//need a param to repeat the solution function until the end of the string
//need a param to hold a boolean to tell the string to stop running if true is found
//first check base case if counter >= str.length
//if not base case check letter against 

/**
 *  Write a function called solution that takes in 2 parameters, a string and a letter, and
 *  returns true if the character exists in the string, false if the character does not exist in the string.
 * @param {string} inp 
 * @param {character} letter 
 * @param {number} i 
 * @param {boolean} isFound 
 * @returns boolean
 */
const solution = (inp, letter, i = 0, isFound = false) => {

    if(i === inp.length || isFound) return isFound

    if(inp[i] === letter) isFound = true

    return solution(inp, letter, i + 1, isFound)

}

console.log(result = solution('abc', null))
console.log(result = solution('abc', 'd'))

