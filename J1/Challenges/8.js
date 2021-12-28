/**
 * Write a function called solution that takes in 2 parameters,
 *  a string and a letter, and returns the number of times the character shows up in the string

result = solution('abc', 'a') // 1
result = solution('bccbccb', 'b') // 3
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason 
 */

//need two parameters for user input str and letter
//need a param called counter default to 0 to keep track of the number of recursions and index through str
//need a param called result to add the number of instances the letter appears in the string
//first check base case if counter >= str.length
//if so return result
//if not base case then check if the letter is equal to the str at index counter
//if so increment result
//otherwise recursively call solution adding 1 to counter
//solution("hi", null)
//solution("hi", -1)
//solution("hi", 'hi")
/**
 *  Write a function called solution that takes in 2 parameters,
 *  a string and a letter, and returns the number of times the character shows up in the string
 * @param {string} inp
 * @param {character} letter
 * @param {number} counter
 * @param {number} result
 * @returns {number}
 */
const solution = (inp, letter, counter = 0, i = 0) => {
  if (i === inp.length) return counter;
  if (inp[i] === letter) counter++;
  return solution(inp, letter, counter, i + 1);
};

/*
const solution = (inp, letter, counter = 0, i = 0) => {

    if(counter >= inp.length) return i

    if(inp[counter] === letter) return solution(inp, letter, counter + 1, i + 1)

    return solution(inp, letter, counter + 1, i)

}
*/

console.log(solution("hi", null));
console.log(solution("hi", -1));
console.log(solution("hi", "hi"));
console.log((result = solution("abc", "a"))); // 1
console.log((result = solution("bccbccb", "b"))); // 3
//solution("hi", -1)
//solution("hi", 'hi")
