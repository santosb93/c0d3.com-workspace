/**
 * Write a function named logFirstX that logs a given number of characters 
 * from the beginning of a string.
 * @returns 
 * @param {string} string 
 * @param {number} input 
 * @param {number} counter 
 */

//check base case
//if counter > input return
//if not then console.log string[counter]
//call logFirstX to interate again incrementing counter

//examples
//logFirstX

const logFirstX = (string, input, counter = 0) => {

    if (counter > input - 1) return

    if(counter < string.length) console.log(string[counter])

    logFirstX(string, input, counter + 1)
}

const b = logFirstX("Happy", 10) // logs the whole string
const c = logFirstX("I am having a great day!", 5)