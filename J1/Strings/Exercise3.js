
/**
 * Write a function named lastX that returns (not console.log) 
 * a chunk of a given size from the end of a string
 * @param {string} string 
 * @param {number} input 
 * @param {number} counter 
 * @param {string} result
 */



//start from the end of the string 
const lastX = (string, input, counter = string.length-1 - (input-1), result = "") => {

    if(counter > string.length-1) return result

    if(counter < 0) return lastX(string, input, counter + 1,result)
    
    return lastX(string,input, counter + 1, result + string[counter])
}

console.log(lastX("Winterfell", -1))
