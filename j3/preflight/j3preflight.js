const j3preflight = {}


/**
 * Write a function called mergeArrays that combines two arrays into one.
 * mergeArrays(['Rattata', 'Raticate'], ['Bulbasaur', 'Ivysaur', 'Venusaur'])
 * // returns ["Rattata", "Raticate", "Bulbasaur", "Ivysaur", "Venusaur"]
 * 
 * 
 * mergeArrays has three parameters: arr1, arr2, result = []
 * 
 * map arr1 to push its elements to result
 * map arr2 to push its elements to result
 return result  
 */
const mergeArrays = ( arr1, arr2 ) => {
 return [...arr1, ...arr2]
}


/**
 * Write a function called firstLongerThan that finds the first string in an array longer than the given number.
 */

const firstLongerThan = (arr, num) => {
  return arr.find((e)=>{
    return e.length > num
  })
}

/**
 * Write a function called getReturnValues that takes in an array of functions, and returns an array of values 
returned by the functions.
use map to call each fn element in the arr and return the result
**/
const getReturnValues = (arr) =>{

  return arr.map(e=>e())

}


const createArray = (num, arr = []) => {
  if (arr.length === num) return arr
  arr.push(0)
  return createArray(num, arr)
}
/**
 * Write a function called zeroSquare that takes in a number, and returns a square two-dimensional array 
 * with the input number rows and columns filled with zeros.
 * initialize the first array of length num using a helper function
 * use forEach to change to original array storing the return value of createArray in each element.
 */
const zeroSquare = (num) => {

  const arr = createArray(num)
  arr.forEach((e,i,arr)=>{
    arr[i] = createArray(num)
  })
  return arr
}

j3preflight.zeroSquare = zeroSquare
j3preflight.getReturnValues = getReturnValues
j3preflight.firstLongerThan = firstLongerThan
j3preflight.mergeArrays = mergeArrays
module.exports = j3preflight

