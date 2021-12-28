const test = {}
/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

 const solution = (arr, obj) => {


  return arr.reduce((values, e) => {
    if(obj.hasOwnProperty(e)){
      values.push(obj[e])
    }
    return values
  },[])
   
  return arr.map(e => {
    if(obj.hasOwnProperty(e)) return obj[e]
  }).filter((e)=> {
    return (e || typeof(e) === 'boolean')
  })

}

/*
let a = solution(['toString'], { a: 1, b: 2, c: 3 })
console.log(a)
*/

a = solution(['d'], { a: 1, b: 2, c: 3, d: false })
console.log(a)
// will return ['hi', 'world']]
test.solution = solution

module.exports = test
