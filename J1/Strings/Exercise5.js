/**
 * Write a function called removeCharacter that returns a string without any instances of a given character.
 * @param {string} string 
 * @param {string} character 
 * @param {number} counter 
 * @param {string} result
 */

//check basecase (if counter === string.length)
//check if string[counter] is equal to character
//if so call removeCharacter incrementing counter
//if not call removeCharacter incrementing counter and adding string[counter] to the result



const removeCharacter = (string, char, counter = 0, result = "") => {

    if(counter === string.length) return result

    if(string[counter] === char) return removeCharacter(string, char, counter + 1, result)

    return removeCharacter(string, char, counter + 1, result + string[counter])

}

console.log(removeCharacter('banana', 'a'))
console.log(removeCharacter(' ', 'abc'))
console.log(removeCharacter('Jump', 'i'))
console.log(removeCharacter('Iblovebcoding!', 'b'))