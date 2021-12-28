const request = require('request')

// We are sending a request to a Pokemon API to get Pokemon data.
// This one actually works!
request(
  'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
  (err, res, data) => {
    console.log(data) // data is JSON

    // We use JSON.parse to parse the JSON back into an object
    const pokeInfo = JSON.parse(data)

    console.log(pokeInfo.results) // Array of pokemon!
  }
)