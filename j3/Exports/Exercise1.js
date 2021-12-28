const fs = require('fs')
fs.readdir('./', (err, files) => {
  files.forEach(e=>{
    if(e.length > 10) console.log(e)
  })
})