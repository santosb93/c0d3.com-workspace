/**
 * Write a function named fizzbuzz that calls console.log for every number 1 
 * to the input number. However if the number is divisible by 3, log
 * "fizz" instead and if the number is divisible by 5, log "buzz" instead
 * If the number is divisible by both log "fizzbuzz"
 * 
 * 
 */



const fizzbuzz = (userNum, counter = 1) => {

    if(counter > userNum) return

    if(!(counter % 3) && !(counter % 5)) console.log(`fizzbuzz`)
    else  if (!(counter % 3)) console.log(`fizz`)
    else  if (!(counter % 5)) console.log(`buzz`)

    fizzbuzz(userNum, counter +1)

}

fizzbuzz(15)


