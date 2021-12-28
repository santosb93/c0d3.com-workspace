/**
 * Write a function named helloFunction that returns a function
 *   
 *
 * @returns {function}
 */


const helloFunction = () =>{
   let hello = "";

   return () => {
      return hello += "hello";
   }
}


//test
const moreHello = helloFunction();
let b = moreHello(); // b is "hello"
console.log(`1:${b}`);
b = moreHello() //b is "hellohello"
console.log(`2:${b}`);
b = moreHello() //b is "hellohellohello"
console.log(`3:${b}`);
b = moreHello() //b is "hellohellohellohello"
console.log(`4:${b}`);
//every time moreHello is called, one more hello will be appended to variable b