const arraysBasic = {} 
 
 /**
  * Write a function named selectiveZero that takes in an array and a number. 
  * This function replaces the value of any elements of an array when the element's
  * value matches the given number with a value of 0.
  * @param {array} arr 
  * @param {number} num 
  * @param {number} counter 
  * @returns {array}
  */
  const selectiveZero = (arr, num, counter = 0) => {
    if(counter >= arr.length) return arr
    if(arr[counter] === num) arr[counter] = 0
    return selectiveZero(arr,num, counter + 1)
 
  }

  /**
   *  Write a function named largest that returns the largest number in an array.
   * @param {array} arr 
   * @param {number} index
   */
  const largest = (arr, index = 0, max) => {

    if(index >= arr.length) return max
    if(index === 0) max = arr[index]
    if(arr[index] > max) max = arr[index]
    return largest(arr, index + 1, max)

  }


/**
 * Write a function named firstXToZero
 * that sets the value of the first X elements in an array to 0, where X is the input number.
 * @param {array} arr 
 * @param {number} x 
 * @param {number} index 
 * @returns 
 */
   const firstXToZero = (arr, x, index = 0) => {

     if(index >= x || index === arr.length) return arr
     arr[index] = 0
     return firstXToZero(arr, x, index + 1)

   }


 const checkPrime = (num, counter = 2) => {
    if(num < counter ) return false
    if(counter >= num) return true
    if(num % counter === 0) return false
    return checkPrime(num, counter + 1)
  }

   /**
    * Write a function named allPrime that determines whether the value of every element in an array is a prime number.
    * @param {array} arr 
    * @param {number} index 
    * @returns {boolean}
    */
   const allPrime = (arr, index = 0) => { //arr = [2,7,9,10]

     if(index >= arr.length) return true
     if(checkPrime(arr[index]) === false) return false
     return allPrime(arr, index + 1)

   }
   
  /**
   * 2 parameters: arr, index, 
   * base case: if index >= arr.length return true
   * if(checkPrime(arr[index]) === false) return false
   * recursively call allPrime incrementing index
   * 
   * checkPrime
   * three parameters: num, counter
   * basecase if counter >= num return true
   * if(num % counter === 0) return false
   * recursively call checkPrime incrementing index
   * 
   */

  
   /**
    *    Write a function named increasing that determines whether the elements of an array 
    * are ordered such that they represent a strictly ascending sequence of numbers.
    * This means that the value of each element (other than the first) is greater than 
    * the value of the previous element.
    * @param {array} arr 
    * @param {number} index 
    */
   const increasing = (arr, index = 0,lastNum = 0) => {
     if(index >= arr.length) return true
     if(arr[index] <= lastNum) return false
     return increasing(arr, index + 1, arr[index])
   }
   /**
    * two params: arr, index,lastNum
    * basecase: if index >= array.length return true
    * if(arr[index] < lastNum) return false
    * recursively call increasing incrementing index and assigning last num arr[index]
    */

   





  arraysBasic.increasing = increasing
  arraysBasic.allPrime = allPrime
  arraysBasic.firstXToZero = firstXToZero
  arraysBasic.largest = largest
  arraysBasic.selectiveZero = selectiveZero

  module.exports = arraysBasic