const obj = {}
const request = require('request')
const fs = require('fs')

/**
 * Send a request to https://pokeapi.co/api/v2/pokemon/
 * and write all the names into a file called names.html with the following content:
 */
const getNames = () => {
  request('https://pokeapi.co/api/v2/pokemon/',(err,res,data) =>{
    const pokedex = JSON.parse(data) //object
    const pokemonString = pokedex.results.reduce((pokelist, pokemon )=>{
      return pokelist + `<h1>${pokemon.name}</h1>`
    },'')
    fs.writeFile('names.html',pokemonString, ()=>{})
  })

}
obj.getNames = getNames
module.exports = obj