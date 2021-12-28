/**
 * Given object of key-string values and an object of key - function values, 
 * call the functions in 2nd object (if possible) using the values in 1st object
 * as function params. Return new object.

solution ({
   "name": "drake",
   "age": "33",
   "power": 'finessing',
   "color": "platinum"
}, {
   "name": (e) => { return e + "kendrick" },
   "power": (e) => { return "motivating" + e }
});

// will return : 
   {
      "name": "drakekendrick",
      "age": "33",
      "power": "motivatingfinessing",
      "color": "platinum"
   }
  **/
 /*
 * Given object of key: string values and an object of key: function values, call the functions in 2nd object, using the values in 1st object as function params
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 **/

const solution = (obj1, obj2) => {

  const obj1Entries = Object.entries(obj1)
  
  return obj1Entries.reduce((result, e) => {
    if(obj2.hasOwnProperty(e[0])) result[e[0]] = obj2[e[0]](e[1])
    else{ result[e[0]] = e[1] }
    return result
  }, {})
  
}

const a = solution ({
  "name": "drake",
  "age": "33",
  "power": 'finessing',
  "color": "platinum"
}, {
  "name": (e) => { return e + "kendrick" },
  "power": (e) => { return "motivating" + e }
});
console.log(a)
