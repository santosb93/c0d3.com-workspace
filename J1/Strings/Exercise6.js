/**
 * Write a function named secretCodeGenerator that takes in 3 parameters: a string, a letter, and a string, 
 * and returns a string where all the matching letters are replaced by the last input string.
 * @param {string} str1 
 * @param {character} letter 
 * @param {string} str2 
 * @param {number} counter 
 * @param {string} result 
 */


//check basecase (counter == str1.length)
//if so return result
//if not check if str1[counter] === letter
//if so call secretCodeGenerator incrementing counter and adding str2 to the result
//otherwise, call secretCodeGenerator incrementing counter and adding st1[counter to the ]


const secretCodeGenerator = (str1,letter, str2, counter = 0, result = "") => {

    if(counter === str1.length) return result
    if(str1[counter] === letter) return secretCodeGenerator(str1, letter, str2, counter + 1, result + str2)
    return secretCodeGenerator(str1, letter, str2, counter + 1, result + str1[counter])

}   

console.log(secretCodeGenerator('banana', 'a', '*z*'))