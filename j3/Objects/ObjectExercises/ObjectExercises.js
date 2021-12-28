const objectExercises = {}

/**
 * Write a function called addKV that takes in an object,
 * 2 strings (key and value), and adds a new key and value to an object.
 */
const addKV = (obj, key, value) =>{
  obj[key] = value
}

/**
 * Write a function called filterNonKeys that filters an array to only 
 * include strings that are also keys in a given object.
 * const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
const avengers = ['ironman', 'strange', 'thor', 'spiderman', 'hulk']
const result = filterNonKeys(avengers, info)
// result is ["ironman", "spiderman", "hulk"]
 */
const filterNonKeys = (arr, obj) => {

  return arr.filter((e)=>{
    return obj[e]
  })

}

/**
 * Write a function called addDescriptions that adds a description key to each object in an array.
 * The description should go with the name that matches the key in the input object.
 * const characters = [
  { name: 'ironman' },
  { name: 'spiderman' },
  { name: 'hulk' }
]
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
addDescriptions(characters, info)
/* characters is changed to:
  [
    {name: "ironman", description: "arrogant"},
    {name: "spiderman", description: "naive"},
    {name:"hulk", description: "strong"}
  ]
*/


const addDescriptions = (charArray, info) => {

  charArray.forEach((e)=>{
    e.description = info[e.name]
  })
}

/**
 * 
Write a function called countOccurrences that returns an object 
that counts how many times each item occurs in an array.
const abc = ['abc', 'a', 'abc', 'b', 'abc', 'a', 'b', 'c', 'abc']
const result = countOccurrences(abc)
// should return: {abc: 4, a: 2, b: 2, c: 1}

  first iterate through array find all elements that are different store it in an array individualArray
  after finding all different elements need to iterate through the array and check if the
  individual element === the array element
  if it does increment the counter for that individual element in counterArray
  use forEach to return an object with individualArray[i]: counterArray[i]
  

  
 */
/**
const findIndividualElements = (arr, i = 0, result = []) => {
  
  if(i === arr.length) return result

  result.push(arr[i])
  arr = arr.filter(e=>{
    return e != arr[i]
  })

return findIndividualElements(arr, i = 0, result)

} 
const findElementOccurrences = (arr, individualArray, i = 0, result = []) => {
  let counter = 0
  if(i === individualArray.length) return result

  arr.forEach((e)=>{
    if(e === individualArray[i]) ++counter
  })

  result.push(counter)
  return findElementOccurrences(arr, individualArray, i + 1, result)

}


const countOccurrences = (arr) => {
  const individualArray = findIndividualElements(arr)
  const counterArray = findElementOccurrences(arr,individualArray)
  
  const obj = {}
  individualArray.forEach((e,i)=>{
    obj[e] = counterArray[i]
  })
  return obj
  
} 
 */
const countOccurrences = (arr) => {
  return arr.reduce((acc, e)=>{
    acc[e] = (acc[e] || 0) + 1
    return acc
  }, {})
}

const abc = ['abc', 'a', 'abc', 'b', 'abc', 'a', 'b', 'c', 'abc']
const result = countOccurrences(abc)
console.log(result)


objectExercises.countOccurrences = countOccurrences
objectExercises.addDescriptions = addDescriptions
objectExercises.filterNonKeys = filterNonKeys
objectExercises.addKV = addKV
module.exports = objectExercises