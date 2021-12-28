/*Write a function that takes in 2 functions and returns the sum of the result of the 2 functions Example:

const a = () => {  return 5; }
const b = () => {  return 6; }
const c = solution(a, b) // c should be 11 because a() + b()
*/


const solution = (func1, func2) => {
    return func1() + func2();
}


//test
a = () => { return 5; }
b = () => { return 6; }
const c = solution(a,b);
console.log(c);
