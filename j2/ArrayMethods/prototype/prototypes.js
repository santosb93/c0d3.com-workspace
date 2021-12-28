const prototypes = {}
/**
 * Create a prototype function called getEvens that returns a
 * new array of all the even numbers in an array of numbers.
 */
Array.prototype.getEvens = function () {
  return this.filter((e)=>{ 
    return e % 2 === 0
  })
}


/**
 * Create a prototype function called sum that adds all 
 * the elements of an array together.
 */

Array.prototype.sum = function () {
  if(this.length===0) return

  if(typeof(this[0]) === 'string'){
    return this.reduce((acc,e)=>{
      return acc + e
    },"")
  }
  return this.reduce((acc,e) => {
    return acc + e
  }, 0)
  
}

/**
 * Create a prototype function called pad that adds a given string to 
 * an array a certain number of times.
 */
Array.prototype.pad = function (num, str){
  if(num <=0) return this
  this.push(str)
  return this.pad(num-1, str)
}

/**
 * Create a prototype function called fizzbuzz that changes the original array.
 *  All numbers divisible by 3 will be converted to "fizz", all numbers divisible
 *  by 5 will be converted to "buzz",
 *  and all numbers divisible by both 3 and 5 will be converted to "fizzbuzz".
 */
Array.prototype.fizzbuzz = function(){
  this.forEach((e,i,arr)=>{
    if(e % 5 === 0 && e % 3 === 0) arr[i] = 'fizzbuzz'
    else if(e % 3 === 0) arr[i] = 'fizz'
    else if(e % 5 === 0) arr[i]  = 'buzz'
  })
}

/**
 * Create a prototype function called removeEvens, which removes all the even numbers from the array.
 */

Array.prototype.removeEvens = function (i = 0) {
  if(i === this.length) return this
  if(this[i] % 2 === 0) {
    this.splice(i, 1)
    return this.removeEvens(i)
  }
  return this.removeEvens(i + 1)
  
} 

/**
 * Create a prototype function called getIterator that returns a function. 
 * When the returned function is called,
 *  it returns the next element of the array.
 */
Array.prototype.getIterator = function () {
  let i = 0
  return () => {
    if(i === this.length) i = 0
    return this[i++]
  }
}



module.exports = prototypes 