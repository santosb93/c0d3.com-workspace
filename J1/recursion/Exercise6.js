/*
 * Write a function named sumEvens that adds up all the positive even numbers 
 * from 2 to the given number (Use % to determine if each number is even)
 * 
 * @returns {number} result
 */

//need a parameter to store the user input (num)
//need a parameter to store the sum (result)
//need a parameter to keep track of iteration (counter)

//sumEvens(0)
//sumEvens(-1)
//sumEvens(2)

const sumEvens = (num, counter = 0, result = 0) => {

    if(counter > num) return result

    if(counter % 2 == 0) return sumEvens(num, counter + 1, result + counter)

    return sumEvens(num,counter + 1, result)

  
}

console.log(sumEvens(0))