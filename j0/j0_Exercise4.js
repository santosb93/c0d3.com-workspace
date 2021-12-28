/*Write a function that takes in 2 numbers and return the largest out of them.

Here's how another developer might use your function:

solution(5,9) // Should return 9
solution(4,1) // Should return 4
Note: Try to implement your solution without the Math.max function */

const solution = (num1, num2) => {
    return (num1 > num2) ? num1 : num2; 
}

console.log(solution(5, 9));
console.log(solution(4, 1));
