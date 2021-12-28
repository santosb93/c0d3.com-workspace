/*Write a function named hello3x that returns a function. The returned function
/*should return "hello" only the first 3 times then "" 
/*
/* @returns {function}
/********/
 const hello3x = () => {
     let runTime = 0;
     return () => {
         if(runTime < 3 ){
             runTime++;
             return "Hello";
         }
         return "";
     }
 }

 const threeF = hello3x()
 let b = threeF() // b is "hello"
 console.log(`First b is ${b}`);
 b = threeF() // b is "hello"
 console.log(`Second b is ${b}`);
 b = threeF() // b is "hello"
 console.log(`Third b is ${b}`);
 b = threeF() // b is ""
 console.log(`Fourth b is ${b}`);