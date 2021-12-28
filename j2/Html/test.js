const checkPrime = (num, counter = 2, isPrime = true) => {
  if(counter >= num || isPrime === false) return isPrime
  if(num % counter === 0 ) return checkPrime(num, counter + 1, false)
  return checkPrime(num, counter + 1, isPrime)
}
const nextPrime = (input, counter = 2, result = '') => {
  if(input <= 1) return
  if(counter > input) return result
  if(checkPrime(counter)) result += `${counter} `
  return nextPrime(input, counter + 1, result)
}

console.log(nextPrime(10))