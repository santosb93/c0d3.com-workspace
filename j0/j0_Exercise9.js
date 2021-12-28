/*Write a function that takes in 2 numbers, return a function 
that takes in a number that returns the sum of all 3 numbers when called. Example:

const a = solution(1,2); // a is a function
// a(1) returns 4 because 1+2+1
// a(5) returns 8 because 1 + 2 + 5 
// a(2) returns 5 because 1 + 2 + 2
*/

const solution = (num1, num2) => {
    return (num3) => { return num1 + num2 + num3};
}


//test 
const a = solution(1,2);
console.log(a(1));
console.log(a(5));
console.log(a(2));
