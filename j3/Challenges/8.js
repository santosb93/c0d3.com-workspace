/**
 * Write a function that takes in an object and a number (milli-seconds).

you must call each function value of the object:
Given an object: {"nVal": (k) => {...}}
{"nVal": (k) => {...When this function runs, k is "nVal"...}}
const a = {
   "jayZ": (key) => console.log(key),
   "tupac": (key) => console.log(key + 2),
   "name3": (key) => console.log(key === "name3"),
   "level": (key) => console.log(key + key + key)
}
solution(a, 500)

// should print out: 
"jayZ"
... 500 millieseconds later...
"tupac2"
...500 millieseconds later...
"true"
...500 millieseconds later...
levellevellevel
* Write a function that takes in an object and a number (millieseconds).
* - You must call each function value of the object {"nVal": (k) => {...}}
* - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
* @param {object} obj
* @param {number} num (millieseconds)
* @call each function value of the object, millieseconds after each other
**/

const solution = (obj, num) => {

  const objArr = Object.entries(obj)
  const callEach = (i = 0) => {
    if(i === objArr.length) return
    objArr[i][1](objArr[i][0])
    setTimeout(()=>{callEach(i+1)}, num)
  }
  callEach()
}
/*
  objArr.forEach((e, i)=>{
    setTimeout(()=>{
      e[1](e[0])
    },num * i)
  })

*/


const a = {
  "jayZ": (key) => console.log(key),
  "tupac": (key) => console.log(key + 2),
  "name3": (key) => console.log(key === "name3"),
  "level": (key) => console.log(key + key + key)
}
solution(a, 1000)
