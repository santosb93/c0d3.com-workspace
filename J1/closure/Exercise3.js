/**
 * Write a function named lessThan that returns a function
 *   
 * @param {number} age
 * @returns {function} with @param {number} comparedAge
 */
const lessThan = (age) => {
    return (comparedAge) => {
        return comparedAge < age
    }
}

//test
const youngerThanCardiB = lessThan(27)
let miley = youngerThanCardiB(26) // true,because 26 is smaller than 27
console.log(`miley: ${miley}`);
let nicki = youngerThanCardiB(36) // false, beacuse 36 is not smaller than 27
console.log(`nicki: ${nicki}`);
const smallerThan = lessThan(2)
let b = smallerThan(3) // b is false, because 3 is not smaller than 2
console.log(`b: ${b}`);
b = smallerThan(5) || youngerThanCardiB(5) // smallerThan(5) is false (falsey)
console.log(`b: ${b}`);
//so b takes the value true because youngerThanCardiB(5) return true