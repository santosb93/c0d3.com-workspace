
/**
 * map takes in a function, applies the function to every element in the array, and returns
 * a new array of the same length. the input function is called for every element and the return
 * value from your input function is put into the new array. note the original array isnt changed
 * cMap takes four parameters: cb, i = 0 , e = this[i], arr = []
 * base case: if i === this.length return arr
 * push the return value of the cb into the arr
 * recursively call this.cMap(cb, i + 1, this[i + 1], arr) returning the value
 */

Array.prototype.cMap = function (cb, i = 0, e = this[i], arr = []) {

    if(i === this.length) return arr
    arr.push(cb(this[i], i, this))
    return this.cMap(cb, i+1, this[i+1], arr)

}


a = [5,8,7]
result = a.cMap( (e, i, arr) => {
  console.log(e, i, arr)
  return e + i
})
console.log(result)
// console.log will be called 3 times:
//    5, 0, original array
//    8, 1, original array
//    7, 2, original array
// result will be [5, 9, 9]