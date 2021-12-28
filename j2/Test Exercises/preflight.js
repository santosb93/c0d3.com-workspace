const allFuns = {}

/**
 * 
 * @param {string} str 
 * @param {number} idx 
 * @param {number} counter 
 * @param {string} result 
 * @returns {string} 
 */
const removeCharX = (str, idx, counter = 0, result='') => {

 if(str.length === counter) return result

 if(idx === counter) return removeCharX(str, idx, counter + 1, result)

 return removeCharX(str, idx, counter + 1, result + str[counter])
  
}


/**
 * Write a function named less3Diff that determines
 * whether two strings have fewer than 3 different characters. 
 * Both arguments will have the same length.
 * @param {string} str1 
 * @param {string} str2 
 * @param {number} idx 
 * @param {number} counter
 * @param {boolean} result 
 * @returns {boolean}
 */
const less3Diff = (str1, str2, idx = 0, counter = 0, result = true) => {

    if(counter === 3) return less3Diff(str1, str2, idx + 1, counter + 1, false)

    if(idx >= str1.length || result === false ) return result

    if(str1[idx] !== str2[idx]) return less3Diff(str1, str2, idx + 1, counter + 1, result)

    return less3Diff(str1, str2, idx + 1, counter, result)

}


/**
 * Write a function named reverso that takes in a string,
 * and returns a new string with the input string reversed.
 * @param {string} str 
 * @param {number} idx 
 * @param {string} result 
 */
const reverso = (str, idx = str.length - 1, result = '') => {

    if(idx < 0) return result

    return reverso(str, idx - 1, result + str[idx])

}

/**
 * Write a function named delayAndCall that takes in 2 parameters, a number and a function, and returns a function
When the returned function is called, the input function will execute after the input number of milliseconds. */

const delayAndCall = (num, fun) => {

    return () => {
        setTimeout( () => {
            fun()
        }, num)
    }


}



/**
 * Write a function named primeMachine that takes in a number and returns a function.

 * Each time the returned function is called, return the next prime number (starting from the input number).
 * (For a new coder, this can be a hard problem. This problem was asked during an onsite interview, 
 * so it is okay if you can't come up with the answer yourself. 
 * This problem involves creating other functions to help you get the correct solution.)
 * @param {number} num 
 * @returns 
 */
const primeMachine = (num) => {

    const getNextPrime = number => {
        return number + 1
    }

    num = getNextPrime(num)

    const checkPrime = (num, counter = 2, isPrime = true) => {

        if(num <= 1) return false

        if(counter >= num || isPrime === false) return isPrime

        if(num % counter === 0) return checkPrime(num, counter + 1, false)

        return checkPrime(num, counter + 1, isPrime)
    }

    return () => {

        while(checkPrime(num) === false){
            num = getNextPrime(num)
        }

        const tempNum = num
        num = getNextPrime(num)
        return tempNum
    }

}

const getPrime = primeMachine(-2)
console.log(getPrime()) // 11
console.log(getPrime()) // 13
console.log(getPrime()) // 17
console.log(getPrime()) // 19

allFuns.delayAndCall = delayAndCall
allFuns.primeMachine = primeMachine
allFuns.reverso = reverso
allFuns.less3Diff = less3Diff
allFuns.removeCharX = removeCharX

module.exports = allFuns

