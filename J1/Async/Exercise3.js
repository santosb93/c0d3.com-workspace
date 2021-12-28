

/**
 * Write a function that takes in a string, and calls 
 * console.log for every character in the string, 1 second after each call (aka 1 character per second). 
 * @param {string} str
 * @param {number} counter
 */
const stringCall = (str, counter = 0) => {

    if(counter === str.length) return

    setTimeout( () => {
    console.log(str[counter])
    }, 1000 * (1 + counter))

    stringCall(str, counter + 1)
}

stringCall("HelloWorld")