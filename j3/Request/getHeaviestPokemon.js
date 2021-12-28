const obj = {}
const request = require('request')

/**
 * Send a request to https://pokeapi.co/api/v2/pokemon/ and console.log the Pokemon 
 * that weighs the most out of the first 20 Pokemon (if you don't give it a limit,
 *  the Pokemon API will default to 20 Pokemon). Look at the response—you will notice 
 * that each Pokemon has a URL.
 *  You need to send another request for each Pokemon to get its weight.
 */

const heaviestPokemon = () => {
  request('https://pokeapi.co/api/v2/pokemon/', (err, res, body)=>{
    const parsedJson = JSON.parse(body)
    const pokemonList = []
    parsedJson.results.forEach((thisPokemon)=>{
      const name = thisPokemon.name
      request(thisPokemon.url, (err, pokeRes, pokeBody) => {
        const data = JSON.parse(pokeBody)
        const weight = data.weight
        pokemonList.push({
          name: name,
          weight: weight
        })
      if(parsedJson.results.length === pokemonList.length) {
        const heaviest = pokemonList.reduce((acc,poke) => {
          return (poke.weight > acc.weight) ? poke : acc
        },pokemonList[0])

        console.log(`Heaviest Pokemon is ${heaviest.name} at ${heaviest.weight} pounds`)
      }
       })
    })
  }) 
}

obj.heaviestPokemon = heaviestPokemon

module.exports = obj