/**
 * Write a function called solution that replicates Array.prototype.forEach and call it cForEach

Callback takes 3 input parameters, element, index and original array. documentation

[5,8,7].cForEach( (e, i, arr) => {
  console.log(e, i, arr)
})
// console.log will be called 3 times:
//    5, 0, original array
//    8, 1, original array
//    7, 2, original array

takes in a function
this function takes in three parameters: e,i, arr
base case if i > this.length return
otherwise fun()

 */
/**
 * 
 * @param {function} cb 
 * @param {number} i 
 * @param {element} e 
 * @returns 
 */
Array.prototype.cForEach = function (cb, i = 0, e = this[i]) {
  
  if(i === this.length) return
  cb(this[i], i, this)
  this.cForEach(cb, i + 1, e = this[i + 1])

}




  
