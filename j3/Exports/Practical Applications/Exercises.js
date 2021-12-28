/**
 * Write a function called makeFiles that takes in a number (X) and creates X+1 files using fs.writeFile.

The filenames should look like: trainer0.txt, trainer1.txt, trainer2.txt, ... trainerX.txt.

When you open the file, each file should have the contents: Gotta catch 'em all

fs.writeFile takes in 3 arguments:

string (filename)
string (file content)
function (to run when the function has finished creating the file; in case you want to check for errors or inform the user that the write succeeded)
Here's an example of how fs.writeFile works:
fs.writeFile('./today.txt', 'today is a beautiful day', () => {})
// This will create a file called today.txt in the same folder
//     When you open the file, it will say 'today is a beautiful day'
 */
const exercises = {}
const fs = require('fs')
const makeFiles = (X => {

  if (X < 0) return
  fs.writeFile(`trainer${X}.txt`, `Gotta catch 'em all`, ()=>{
  })
  makeFiles(X - 1)
  
})



/**
 * Write a function called listFiles that reads the current folder
 * and creates a file called files.html that looks like the following:
 * <h1>file1</h1><h1>file2</h1>...<h1>fileX</h1>
 */
const listFiles = () => {
  
  fs.readdir('./', (err, files) => {
    const str = files.reduce((str,e)=>{
      return str + `<h1>${e}</h1>`
    },'')
    fs.writeFile('files.html', str, ()=>{})
  })

}

listFiles()
exercises.makeFiles = makeFiles
module.exports = exercises