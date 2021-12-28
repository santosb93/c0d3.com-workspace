/**
 * Write a function named runIt that takes in a function
 * as a parameter and returns the function
 * @param {number} num
 * @returns {function} with @param {function} func1
 */

const runIt = (func1) => {
   return (num1,num2) => {
       return func1(num1,num2)
   }
}


//test
const subtract = runIt((a,b) => {
    return a-b;
});
let b = subtract(3,20);//b is -17
console.log(`b1 is ${b}`);
b = subtract(11,2); //b is 9
console.log(`b1 is ${b}`);

