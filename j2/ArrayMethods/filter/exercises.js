const exercises = {}


/**
 * Use filter to write a function called  noMoreEvens that copies an array, removing all even numbers
 * 
 * param (arr)
 * use filter to pass a callback function that returns e % 2
 */

const noMoreEvens = (arr) => {
  return arr.filter((e)=> {
    return e % 2
  })
}

/**
 * Write a function that takes in an array of strings and removes the empty strings
 * 
 * use filter to check if e != '' and return the array
 */

const removeEmpty = (arr) => {
 return arr.filter((e) => e != '')
}

const isPrime = (num, i = 2) => {
  if(num < i) return false
  if(i === num) return true
  if(num % i === 0) return false
  return isPrime(num, i + 1)
}

/**
 * Write a function called primesOnly that copies an array but keeps only prime numbers.
 * use filter to check if isPrime(e) 
 */

const primesOnly = (arr) => {
  return arr.filter((e) => {
    return isPrime(e)
  })
}

/**
 * Write a function called firstPrime that finds the first prime number in an array.
 * use find to check if isPrime(e)
 */

const firstPrime = (arr) => {
  return arr.find((e)=> {
    return isPrime(e)
  })
}

exercises.firstPrime = firstPrime
exercises.primesOnly = primesOnly
exercises.removeEmpty = removeEmpty
exercises.noMoreEvens = noMoreEvens
module.exports = exercises