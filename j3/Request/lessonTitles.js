const obj = {}

const request = require('request')
const fs = require('fs')

/**
 * Send a request to [https://www.c0d3.com/api/lessons](https://www.c0d3.com/api/lessons)
 *  and write all the titles into a file called lessons.html with the following content:
 */
const createTitlesDoc = () => {
  request('https://c0d3.com/api/lessons', (err, res, data) =>{
    const lessons = JSON.parse(data)
    const strTitles = lessons.reduce((acc, thisLesson)=>{
      return acc + `<h1>${thisLesson.title}</h1>`
    },'')
  fs.writeFile('lessons.html',strTitles,()=>{})
  })

}
obj.createTitlesDoc = createTitlesDoc
module.exports = obj