/**
 * 
 * Write a function named wait20 that waits 20 seconds and then calls console.log("one")
 */

 const wait20 = () => {
    setTimeout(()=> {
        console.log('one')
    }, 20 * 1000)

}
wait20();