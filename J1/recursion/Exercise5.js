/*
 * Write a function named numberedHello that returns a string with the same number
 * of "hello" as a given number
 * 
 * 
 */

//we need a variable lets say counter =0
//we need a parameter to store the user argument Num
//we need a variable as a string to hold the hello statements
//we need to call the console.log() function when it returns to the first numberedHello call


//numberedHello(0)
//numberedHello(-1)

const numberedHello = (num, helloString = '') => {

   if(num < 1) {return helloString}

   return numberedHello(num - 1, helloString + 'hello')

}

console.log(numberedHello(3))
