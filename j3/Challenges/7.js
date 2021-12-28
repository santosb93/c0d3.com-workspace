/**
 * Write a map function for objects

const info = {
   ironman: 'arrogant',
   spiderman: 'naive',
   hulk: 'strong',
}
const result = info.map( (key, value, i) => {
   return key + i + value
})
console.log(result)

// will print out ['ironman0arrogant', 'spiderman1naive', 'hulk2strong']
 */

/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
*/


  Object.prototype.map = function (cb) {
    const arr = Object.entries(this)
    if(arr === []) return arr
    return arr.map((e,i)=>{
      return cb(e[0], e[1], i)
    })

  }

  const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong',
 }

  const result = info.map( (key, value, i) => {
    return key + i + value
 })
 console.log(result)