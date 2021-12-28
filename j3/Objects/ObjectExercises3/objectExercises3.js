const objectExercises3 = {}

Object.prototype.forEach = function (cb, i = 0, keys = Object.keys(this)) {

  if(i === keys.length) return
  cb(keys[i], this[keys[i]], i)

  this.forEach(cb, i + 1, keys)

}

/**
 * 
 * @param {const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
const result = info.filter((key, value) => {
  return key[0] === 'i' || value[0] === 'n'
})
console.log(result) // should print out:
/*
{
  ironman: "arrogant",
  spiderman: "naive"
}
*/
Object.prototype.filter = function (cb, entries = Object.entries(this)) {
  return entries.filter((e)=>{
    return cb(e[0],e[1])
  }).reduce((obj, e)=>{
     obj[e[0]] = e[1]
     return obj
  }
  ,{})

}

Object.prototype.reduce = function(cb,acc, entries = Object.entries(this)) {
  
  return entries.reduce((acc, e, i)=>{
    acc = cb(acc,e[0],e[1], i)
    return acc

  },acc)


}

/**
 * Write a getCharCount prototype function for arrays of strings that returns an object of character counts.
 *;['Charmander', 'Charmeleon', 'Charizard'].getCharCount()

/*
* Returns
{
  C: 3,
  h: 3,
  a: 5,
  r: 5,
  m: 2,
  n: 2,
  d: 2,
  e: 3,
  l: 1,
  o: 1,
  i: 1,
  z: 1
}
*/

const getCharArray = (arr) => {
  const resultArray = []
  
  for(let i=0; i < arr.length; ++i)
    resultArray.push(arr[i])
  return resultArray
}


Array.prototype.getCharCount = function (){

  const charArray =  this.reduce((arr,e)=>{
    return arr.concat(getCharArray(e))
  },[])
  
  return charArray.reduce((obj,e)=>{
    obj[e] = (obj[e] || 0) + 1
    return obj
  },{})
 
}
/**
 * Write a getMostCommon prototype function for arrays that returns the most common element.
 ;[9, 8, 7, 8, 7, 7, 7].getMostCommon()[
  // returns 7 because it is the most common element

  ('Batman', 8, 7, 'Batman', 'Robin')
].getMostCommon()
// returns "Batman" because it is the most common element
 * 
  * 1. reduce the array to an object. This object will increment its value depending on the number of
  *    the same keys
  * 2. reduce object to a an array that hold its value and index
  * 3. return the string
 */


Array.prototype.getMostCommon = function () {
  if(this.length === 0) return null
  const a = this.reduce((obj, e)=>{
    obj[e] = (obj[e] || 0) + 1
    return obj
  }, {})


 const index = Object.values(a).reduce((acc,e,i)=>{
  if( e > (acc[1] || 0)){
    acc[0] = i
    acc[1] = e
  }
  return acc
 },[])
 const answer = Object.keys(a)[index[0]]
 let num = parseInt(answer, 10)
 return (num) ? num : answer
}



/**
 * Write a removeDupes prototype function for arrays that removes duplicate elements from the array.
 * const a = [9, 8, 7, 8, 7, 7, 7]
 * a.removeDupes() // a becomes [9]
 * 
 * 1. first gonna map the elements in an obj using reduce
 * 2. convert the object to an array of entries
 * 3. filter the object to an array of entries that have a value > 1
 * 4. map each array element filtering the array of entries with a value > 1 and return the new array
 */
Array.prototype.removeDupes = function () {
  const map = this.reduce((obj, e)=>{
    obj[e] = (obj[e] || 0) + 1
    return obj
  },{})


 
  const remove = (i=0) => {
    if(i === this.length) return
    if(map[this[i]] === 1) return remove(i + 1)
    this.splice(i,1)
    return remove(i)
    
  }
  remove()
}

const a = [9, 8, 7, 8, 7, 7, 7]
a.removeDupes()
console.log(a) // a becomes [9]



