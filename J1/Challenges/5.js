
/*
solution(88, () => { console.log('hello') }) // 'hello' should be printed out 88 times.

solution(9, () => { alert('hello') }) // alert('hello') should be ran 9 times.
Reminder for students with prior experience: you are not allowed to use for and while loops. Reason
 */

/**
 * Write a function called solution that takes in 2 parameters, a number X and a function, and calls 
 * the function X number of times and then returns null.
 * Basically, solution should run the user provided function X times.
 * @param {number} num 
 * @param {function} func 
 * @param {number} counter 
 * @returns null
 */
const solution = (num, func, counter = 0) => {
    if(counter >= num) return null
    func()
    return solution(num,func, counter + 1)
}

//need a param for num and func for user input and a param for counter
//check for base case( if counter >= num) return null
//otherwise excecute the user function
//recursively call solution adding 1 to counter

console.log(solution(10, () => { console.log(`hello`)}))
