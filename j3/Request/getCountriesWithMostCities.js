const obj = {}

const request = require('request')
const fs = require('fs')

/**
 * Send a request to https://api.openaq.org/v1/countries to get all countries,
 *  and console.log the country with the largest number of cities.
 */
const getMostCities = () => {

  request('https://api.openaq.org/v1/countries', (err, res, data) => {
    const countries = JSON.parse(data) //object with a key results which in an array 
    const mostCities = countries.results.reduce((largest, country, i )=>{
      if(i===0) largest = country
      else if(country.cities > largest.cities) largest = country
      return largest
    },{})
    console.log(mostCities.name)
  })

}

obj.getMostCities = getMostCities
module.exports = obj