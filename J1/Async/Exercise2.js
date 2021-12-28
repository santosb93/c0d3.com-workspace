/**
 * 
 * Write a function named oneAndTwo that waits 20 seconds and then calls console.log("one"), then waits another 
 * 10 seconds and then calls console.log("two"). Reminder: 'two' will appear 30 seconds after the function is run.
 */


const oneAndTwo = () => {
    setTimeout(() => {
        console.log('one')
        setTimeout(() => {
            console.log('two')
        }, 10 * 1000)
    }, 20 * 1000)


}
oneAndTwo();