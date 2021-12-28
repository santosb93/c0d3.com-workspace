/**
 * Write a function named callWith that takes a number and returns a function.
 * The returned function takes in a function as its parameter and invokes it with the 
 * number as argument
 * 
 * @param {number} num
 * @returns {function} with @param {function} func1
 */
const callWith = (num) => {
    return (func1) => {
        return func1(num);
    }
}


const fun = callWith(10);
let b = fun(num => {
    return num +5
}) //b is 15
console.log(`b1 is ${b}`);

b = fun(num => {
    return num + 'hello'
}) //b is "10hello"
console.log(`b2 is ${b}`);

b= fun(num => {
    return 500 % num
}) // b is 0
console.log(`b3 is ${b}`);