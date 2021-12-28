const request = require('request')
const obj = {}


/**
 * Send a request to https://www.c0d3.com/api/lessons and console.log all the titles
 */
const printLessons = () => {
  request('https://c0d3.com/api/lessons', (err,res,data) => {
    const lessons = JSON.parse(data)
    lessons.forEach(thisLesson => {
      console.log(thisLesson.title)
    })
  })

}


obj.printLessons = printLessons
module.exports = obj

