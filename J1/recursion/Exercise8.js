/*
 * // fun1 runs b (2nd argument) x times
 * fun1(99, () => {
 *  console.log('hello')
 *   })
 */


//need a param to keep counter
//need a param for the function
//need a param for the number inputted

//Examples
//fun1(-1)
//fun1(0)

//base case if counter > num return


const fun1 = (num, func, counter = 1) => {

    if(counter > num) return    
    func();
    fun1(num, func, counter + 1)
}

const a = fun1(2, () => {
    console.log("c0d3")
})