const arrayMethods = {} 

/**
 * 3 params: arr, index = 0, copyArr = []
 * (Base Case) if index >= arr.length return copyArr
 * otherwise copyArr.push(arr[index])
 * recursive call copyArray incrementing index by 1
 * 
 * Ex: copyArray([0,1])
 *     copyArray([])
 */


/**
 * 
 * Write a function named copyArray that takes in an array
 * and returns a new array that is an identical copy of the given array.
 * @param {array} arr 
 * @param {index} index 
 * @param {array} copyArr 
 * @returns {array}
 */
const copyArray = (arr, index = 0, copyArr = []) => {
  
  if(index >= arr.length) return copyArr

  copyArr.push(arr[index])

  return copyArray(arr, index + 1, copyArr)

}


/**
 * Four params: arr, str, index = 0, result 
 * Basecase: if index >= arr.length return result
 * if arr[index] is equal to str then arr.splice(index,1), recursive call removeElement without
 * incrementing index since one element was removed
 * otherwise recursive call removeElement incrementing index
 */



/**
* Write a function named removeElement that takes in an array a and a string as parameters.
 *  This function removes any element of the array a when the element's value matches the value of the string. 
 *  On completion, returns the updated array a.
 * @param {array} arr 
 * @param {string} str 
 * @param {number} index
 */
const removeElement = (arr, str, index = 0) => {

  if(index === arr.length) return arr

  if(arr[index] === str){
    arr.splice(index,1)
    return removeElement(arr, str, index)
  }

  return removeElement(arr, str, index + 1)

}

/**
 * Write a function named copyWithout that takes in an array and a number and returns a copied array. 
 * This function copies all elements in the array except for elements whose value matches the given number.
 * On completion, returns the copied array.
 * 
 * params: arr, num, index = 0, result = []
 * basecase: if index === arr.length return result
 * if the array element does not equal to num, push the arr element into result 
 * recursive call copyWithout incrementing index
 * 
 * Examples:
 * copyWithout([],0)
 * copyWithout([0,1,2], 2)
 *
 * @param {array} arr 
 * @param {number} num 
 * @param {number} index 
 * @param {array} result 
 * @returns {array}
 */
const copyWithout = (arr, num, index = 0, result = []) => {

  if(index === arr.length) return result
  if(arr[index] != num) result.push(arr[index])
  return copyWithout(arr, num, index + 1, result)
}

/**
 * Write a function named copyReverse that makes a copy of an array in the reverse order.
 * params: arr, index = arr.length - 1, result = []
 * if index < 0 return result
 * result.push(arr[index])
 * recursive call copyReverse decrementing index
 * 
 * Ex: copyReverse([])
 *     copyReverse([0,1,2])
 * 
 * 
 * @param {array} arr 
 * @param {number} index 
 * @param {array} result 
 * @returns {array}
 */
const copyReverse = (arr, index = arr.length - 1, result = []) => {

  if(index < 0) return result
  result.push(arr[index])
  return copyReverse(arr, index - 1, result)

}

/**
 * Write a function named copyLast that copies an array but leaves out a given number of elements at the front.
 * 
 * params: arr, num, index = 0, result = []
 * 
 * base case: if index === arr.length return result
 * if index is greater than or equal to num then push the arr element into result
 * return the recursive call of copyLast incrementing index
 * 
 * Ex: copyLast([0,1,2,3], 3) should return [3]
 *     copyLast([0,1,2,3], 0) should return [0,1,2,3]
 *     copyLast([0,1,2,3], -1) should return [0,1,2,3]
 * 
 * @param {array} arr 
 * @param {num} num 
 * @param {number} index 
 * @param {array} result 
 * @returns {array}
 */
const copyLast = (arr, num, index = 0, result = []) => {
  if(index >= arr.length) return result
  if(index >= num) result.push(arr[index])
  return copyLast(arr, num, index + 1, result)
}


/**
 * Write a function called copyFirst that copies an array but leaves out a given number of elements at the end.
 * 
 * stop copying array at arr.length - num
 * 
 * params: arr, num, index = 0, result = []
 * 
 * Base case: if(index >= arr.length - num ) return result
 * 
 * if index is less than arr.length - num push the arr element into result
 * 
 * otherwise recursive call copyFirst incrementing index
 * 
 * Ex: copyFirst([0,1,2,3], 5)
 *     copyFirst([0,1,2,3], -1)
 *     copyFirst([0,1,2,3], 0)
 * 
 * 
 * @param {array} arr 
 * @param {number} num 
 * @param {number} index 
 * @param {array} result 
 */
const copyFirst = (arr, num, index = 0, result = []) =>{
  if(index >= arr.length - num) return result
  result.push(arr[index])
  return copyFirst(arr, num, index + 1, result)

}

/**
 * Write a function named runOnEach that calls a function on every element in an array,
 * and returns a new array with the results.
 * 
 * params arr, func, i = 0, results = []
 * 
 * base case: if index is equal to arr.length return results
 * 
 * otherwise push the value that the function returns when passing arr[i] as an argument into results array
 * 
 * return recursively call runOnEach incremnting i
 * 
 * @param {array} arr 
 * @param {function} func 
 * @param {number} i 
 * @param {arr} result 
 * @returns 
 */
/*const runOnEach = (arr, func, i = 0, result = []) => {

  if(i === arr.length) return result
  result.push(func(arr[i], i))
  return runOnEach(arr, func, i + 1, result)
}*/
const runOnEach = (arr, fun) => {
  return arr.map(fun)
}



/**
 * Write a function named onlyIndex that takes an array of arrays and 
 * returns an array of each array's element at a given index.
 * (If you think of the big array as a table of rows, this function returns a given column).
 * 
 * params arr, num, index = 0, result = []
 * 
 * base case if index >= arr.length return result
 * at array[i] get the value of element at num and store it into the result array
 * return the value of the recursive call of onlyIndex incrementing i + 1
 * 
 */
const onlyIndex = (arr, num, index = 0, result = []) => {

  if(index >= arr.length ) return result
  result.push(arr[index][num])
  return onlyIndex(arr, num, index + 1, result)
}


arrayMethods.onlyIndex = onlyIndex
arrayMethods.runOnEach = runOnEach
arrayMethods.copyFirst = copyFirst
arrayMethods.copyLast = copyLast
arrayMethods.copyReverse = copyReverse
arrayMethods.copyWithout = copyWithout
arrayMethods.removeElement = removeElement
arrayMethods.copyArray = copyArray

module.exports = arrayMethods