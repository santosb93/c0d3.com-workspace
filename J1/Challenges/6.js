/**
 * Write a function called solution that takes in a number and returns true if it's prime, false otherwise.

A prime number is a number that is greater than 1, and not divisible by any number other than itself.

There are a number of approaches to do this, but the simplest is to start a number i at 2, and keep 
using % to check if the input number is divisible by i.

result = solution(2) // true
result = solution(1) // false
result = solution(8) // false
result = solution(13) // true
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason 
 */

/**
 * Write a function called solution that takes in a number and returns true if it's prime, false otherwise.

 * A prime number is a number that is greater than 1, and not divisible by any number other than itself.

 * There are a number of approaches to do this, but the simplest is to start a number i at 2, and keep 
 * using % to check if the input number is divisible by i.

 * @param {number} num 
 * @param {number} i = 1
 * @param {boolean} isPrime = true
 * @returns {boolean} 
 */
const solution = (num, i = 2, isPrime = true) => {

    if(num <= 1) return false

    if(i >= num || !isPrime) return isPrime

    if(num % i === 0) return solution(num, i + 1, false)

    return solution(num, i + 1, isPrime)

}

result = solution(2) // true
console.log(result)
result = solution(1) // false
console.log(result)
result = solution(8) // false
console.log(result)
result = solution(13) // true
console.log(result)
