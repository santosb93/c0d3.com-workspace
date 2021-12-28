


/**
 * Executes a user supplied reducer callback function on each element of the array, passing in the return
 * value from the calculation of the preceding element. The reduce function has 2 parameters, a function
 * and a starting value.
 * @returns 
 * 
 * 
 */
Array.prototype.cReduce = function (cb, result, i = 0) {

  if(!result) this.cReduce(cb, this[0], i)
  if(i === this.length) return result
  const temp = cb(result, this[i], i, this)
  return this.cReduce(cb, temp, i+1)

}

let callbacks;
[9].cReduce((acc, e, i, arr) => {
  callbacks = [acc, e, i, arr]
}, 8)

a = [5,8,7]
result = a.cReduce( (acc, e, i, arr) => {
  console.log(acc, e, i, arr)
  return acc + e + i
}, 'hi')
console.log(result)
// console.log will be called 3 times:
//    'hi', 5, 0, original array
//    'hi50', 8, 1, original array
//    'hi5081', 7, 2, original array
// result will be 'hi508172'