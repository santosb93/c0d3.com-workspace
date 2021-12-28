const obj = {}
const request = require('request')
const fs = require('fs')
/**
 * Send a request to https://pokeapi.co/api/v2/pokemon/ and then send a request to get
 *  information for each Pokemon to get its image (sprites.front_default). 
 * Create an HTML page with 100 Pokemons' names and images.

(To get 100 Pokemon instead of 20, just pass a parameter into the URL:
   https://pokeapi.co/api/v2/pokemon?limit=100.)

The HTML img tag is a single tag that takes the URL of an image in its src (source) attribute.

<div><p>name1</p><img src="image1" /></div>...<div><p>namex</p><img src="imagex" /></div>
 */

const createProfile = () => {
  request(`https://pokeapi.co/api/v2/pokemon?limit=100`,(err,res,body)=>{
    const parsedJson = JSON.parse(body) //array of objects (name and url)
    const pokeList = []
    parsedJson.results.forEach((pokemon)=>{
      request(pokemon.url, (err,pokeRes,pokeBody)=>{
        const data = JSON.parse(pokeBody)
        pokeList.push({
          name: pokemon.name,
          url: data.sprites.front_default
        })
        if(pokeList.length === parsedJson.results.length){
          const pokedex = pokeList.reduce((acc, thisPokemon)=>{
            return acc + `<div><p>${thisPokemon.name}</p><img src="${thisPokemon.url}"/></div>`
          },'')
          fs.writeFile('pokemon.html',pokedex,()=>{})
        }
      })

    })


  })
}
obj.createProfile = createProfile
module.exports = obj