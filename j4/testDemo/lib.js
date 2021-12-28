const obj = {}

/**
 * Write a function called lib.tokenize. Given a string, 
 * split it into words and return an object where each word is a key 
 * (capitalized) with value 1.
 * Ignore strings shorter than 3 characters and numbers.
 */ 
/* THIS FUCTION DOES NOT UTILIZE STRING METHOD SPLIT
const tokenize = (str) => {
  const arr = [...str]
  const strArr = arr.reduce((acc, thisStr, i)=>{
    if(thisStr === ' '){
      if(acc[acc[0]].length > 2 && !parseInt(acc[acc[0]])) {
        acc[1][acc[acc[0]].toUpperCase()] = 1
      }
      acc[0] += 1
    }
    else{
      (acc[acc[0]]) ? (acc[acc[0]] += thisStr) : acc.push(thisStr)
    }
    if(i === arr.length - 1){
      if(acc[acc[0]].length > 2 && !parseInt(acc[acc[0]])){
        acc[1][acc[acc[0]].toUpperCase()] = 1
      }
    }
    return acc
  },[2,{}])

  return strArr[1]

}
*/
const tokenize = (str) =>{
  return str.split(' ').reduce((obj, thisString)=>{
    if(thisString.length > 2 && !parseInt(thisString)) obj[thisString.toUpperCase()] = 1
    return obj
  },{})

}

/**
 * Write a function called lib.makeTrainingData. Given an object 
 * (keys are item names and values are group names), return an array of objects. 
 * Each object has an input key and an output key, and their values are the tokenized 
 * key and value from the input object, respectively.
 */
const makeTrainingData = (obj) => {
  const objArray = Object.entries(obj)
  return objArray.map(thisObj=>{
    return {
      input: tokenize(thisObj[0]),
      output: tokenize(thisObj[1])
    }
  })
}
/**
 * Write a lib.pushAll function that pushes an array onto every array in an object.
 */
const pushAll = (data, givenArr) => {
  Object.keys(data).forEach((keys)=>{
    data[keys].push(givenArr)
  })
}

/**
 *  Write a lib.getMostLikely function that finds the key with the largest value in an object.
 */
const getMostLikely = (obj) => {
  const objArr = Object.entries(obj)
  if(objArr.length === 0) return null
  return objArr.reduce((mostLikely, thisObj)=>{
    return (thisObj[1] > obj[mostLikely]) ? thisObj[0] : mostLikely
  },objArr[0][0])
}


obj.getMostLikely = getMostLikely 
obj.pushAll = pushAll
obj.makeTrainingData = makeTrainingData
obj.tokenize = tokenize
module.exports = obj