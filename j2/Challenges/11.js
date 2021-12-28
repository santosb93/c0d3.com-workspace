/**
 * Write a function called solution that replicates Array.prototype.find and call it cFind.

Callback takes 3 input parameters, element, index and original array. documentation

result = [5,8,7].cFind( (e, i, arr) => {
  console.log(e, i, arr)
  return e % 2 === 0
})
// console.log will be called 2 times:
//    5, 0, original array
//    8, 1, original array
// result will be 8
**/

Array.prototype.cFind = function (cb,i = 0) {

  if(i === this.length) return undefined
  if(cb(this[i], i , this)) return this[i]
  return this.cFind(cb, i + 1)

}

result = [5,8,7].cFind( (e, i, arr) => {
  console.log(e, i, arr)
  return e === true
})
console.log(result)