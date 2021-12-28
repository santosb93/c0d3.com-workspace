/*
 * write a function called solution that takes in an array of strings
 and returns a function. when the returned function is called 
 (with an object with many keys), it will return an object with only 
 keys that exist in the input arrary.
 * @param {array} arr {object} obj
 * @return {object} obj
 * const resp = solution(['apollo', 'bella', 'cinderella'])
console.log(resp({'apple': 25, 'apollo': 45, 'cindy': 84}))
// will console.log this object: {"apollo": 45}

console.log(resp({orange: 80, 'apollo': 95}))
// will console.log this object: {'apollo': 95}

console.log(resp({iron: 'man', billy: 'joel'}))
// will console.log this object: {}
 */

const solution = (arr) => {
  return (obj) => {
    return arr.reduce((result, e)=>{
      if(obj.hasOwnProperty(e)) result[e] = obj[e]
      return result
    }, {})
  }
}

/*
const solution = (arr) => {

  return (obj) => {
    const isAkey = (key,arr,i = 0) => {
      if(i===arr.length) return false
      if(key === arr[i]) return true
      return isAkey(key, arr, i + 1)
    }

    return Object.entries(obj).reduce((result, e)=>{
      if(isAkey[e[0],arr]) result[e] = e[1]
      return result
    },{})
    
  }
}
*/

const resp = solution(['apollo', 'bella', 'cinderella'])
console.log(resp({'apple': 25, 'apollo': 45, 'cindy': 84}))
// will console.log this object: {"apollo": 45}

console.log(resp({orange: 80, 'apollo': 95}))
// will console.log this object: {'apollo': 95}

console.log(resp({iron: 'man', billy: 'joel'}))
// will console.log this object: {}