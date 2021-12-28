const fetch = require('node-fetch');
const pokeNumbers = [37,38,39,40]
const arrayPromises = pokeNumbers.map(num => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(result => {
    // result is an array of response objects, one for each request
    // we need to parse the JSON in each result
    return result.json()
  })
})

Promise.all(arrayPromises).then(results => {
  results.forEach(e => {
    console.log(`${e.name} weighs ${e.weight}`)
  })
})
