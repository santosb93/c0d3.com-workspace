/*
 * Write a function named tryNumRange that takes in a number and a 
 * function and calls the function with every number from 1 to the input number.
 * If any of these return true, return true; if they all return false, return false.
 * 
 * @param {number} num
 * @param {function} func
 * @param {number} counter
 * @returns {boolean} 
 * 
 */


/*base case: counter > num 
if the funct returns true return || if counter == num return false*/

const tryNumRange = (num, func, counter = 1) =>{

    if(counter > num) return false

    if(func(counter)) return true

    return tryNumRange(num, func, counter + 1)

}


let res = tryNumRange(15, e => {
    return e > 10
  })
console.log(res)


res = tryNumRange(8, e => {
    return e === 19
})
console.log(res)

//Example 2
res = tryNumRange(-2, e => {
    return e % 2 === 0
})
console.log(res)