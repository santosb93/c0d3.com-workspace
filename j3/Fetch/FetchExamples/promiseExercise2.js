const obj = {}
const fetch = require('node-fetch')
const fs = require('fs')

/**
 * Modify your solution to exercise 3 from the previous section to
 *  use axios or node-fetch: Send a request to https://pokeapi.co/api/v2/pokemon/ 
 * and write all the names into a file called names.html with the following content:
<h1>name1</h1><h1>name2</h1>...<h1>nameX</h1>
 */

const getPokemons = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/').then(pokemon => {
    return pokemon.json()
  }).then(parsedPokeList => {
    const pokeStr = parsedPokeList.results.reduce((str, thisPokemon)=>{
      return str + `<h1>${thisPokemon.name}</h1>`
    }, '')
    fs.writeFile('names.html',pokeStr,()=>{})
  })

}

obj.getPokemons = getPokemons
module.exports = obj