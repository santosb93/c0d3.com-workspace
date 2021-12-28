/**
 * 
 * Write a function named logNonMatching that console.logs every character in a word, 
 * except for one given character.
 * 
 * @param {string} string 
 * @param {string} letter 
 * @param {number} counter 
 * @returns 
 */

//need a param for counter
//need a param for the string 

//logNonMatching(string, null)
//logNonMatching(string, 1)
//
const logNonMatching = (string, letter, counter= 0 ) => {

    if(counter === string.length) return
    if(string[counter] === letter) return logNonMatching(string, letter, counter + 1)
    console.log(string[counter])
    logNonMatching(string, letter, counter +1)
}

logNonMatching('banana', 'n')
logNonMatching('I love computer science!', )  

