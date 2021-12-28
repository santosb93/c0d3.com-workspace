/**
 * 
 * Write a function named logOddOnly that prints out only the characters 
 * at odd indices (remember, index starts at 0) from a string.
 * 
 * 
 */

const logOddOnly = (string, counter = 0) => {

    if(counter === string.length) return

    if(counter % 2) console.log(string[counter])

    logOddOnly(string, counter + 1)

}

logOddOnly('catelyn');