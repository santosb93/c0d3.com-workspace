/**
 * Write a function named countTo98 that calls console.log once
 * every number from 0 to 98
 * 
 * 
 * 
 */


const countTo98 = (counter = 0) => {
  if(counter == 99) return
  console.log(counter)
  countTo98(counter + 1)

}

countTo98()