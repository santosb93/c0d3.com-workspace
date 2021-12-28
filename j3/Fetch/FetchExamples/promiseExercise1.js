const fetch = require('node-fetch')
const request = require('request')
const fs = require('fs')
const obj = {}



/**
 * Send a request to [https://www.c0d3.com/api/lessons](https://www.c0d3.com/api/lessons)
 *  and write all the titles into a file called lessons.html with the following content:
 */
const getLessons = () => {
  fetch('https://c0d3.com/api/lessons').then(res => {
    return res.json()
  })
  .then(data => {
    const titles = data.reduce((acc, thisLesson)=>{
      return acc + `<h1>${thisLesson.title}</h1>`
    },'')
    fs.writeFile('title.html', titles, ()=>{})
  })

}
getLessons()
obj.getLessons = getLessons
module.exports = obj