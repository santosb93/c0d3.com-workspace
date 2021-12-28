const obj = {}

const sumAll = (numbers) => {
  return numbers.reduce((sum, thisNum, i) =>{
    if(i===0) return sum
    return sum + thisNum
  },numbers[0] || 0)
}

const findLargest = (numbers) => {
  return numbers.reduce((largest, thisNumber,i) => {
    if(typeof(thisNumber) != 'number' && i === 0) largest = 0
    if(typeof(thisNumber) != 'number') return largest
    if(thisNumber > largest) largest = thisNumber
    return largest
  },numbers[0] || 0)

}

obj.findLargest = findLargest
obj.sumAll = sumAll
module.exports = obj