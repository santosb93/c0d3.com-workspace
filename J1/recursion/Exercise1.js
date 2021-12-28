
/**
 * Write a function named love 
 * that calls console.log("The Things I do for love");
 * 
 * @return undefined
 */


const love = (counter = 0) => {
    if(counter == 99) return
    console.log(`The Things I do for love ${counter}`)
    love(++counter)
}

love()