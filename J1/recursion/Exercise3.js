/**
 * Write a function named countToMe
 * every number from 0 to 98
 * 
 * 
 * @param {number} num
 */


 const countToMe = (num, counter = 8) => {
    if(counter > num) return
    console.log(counter);
    countToMe(num, counter + 1)
  
  }
  
  countToMe(13)