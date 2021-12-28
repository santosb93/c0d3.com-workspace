/*Write a function that takes in 2 numbers and returns true if the first number is greater than the second,
 false otherwise.

Here's how another developer might use your function:

solution(5,9) // Should return false
solution(4,1) // Should return true */

const solution = (num1, num2) => {

    return (num1 > num2) ? true : false; 

}

//test
console.log(solution(5,9));
console.log(solution(4,1));