const obj = {}
const fetch = require('node-fetch')

/**
 * r
Modify your solution to exercise 4 from the previous section to use 
axios or node-fetch: Send a request to https://api.openaq.org/v1/countries 
to get all countries and console.log the country with the largest number of cities.
 */
const getCountries = () => {
  fetch('https://api.openaq.org/v1/countries').then(body => {
    return body.json()
  }).then(data => {
    const largest = data.results.reduce((largest, country)=>{
      if(country.cities > largest.cities) largest = country
      return largest
    },data.results[0])
    console.log(largest.name)
  })


}


obj.getCountries = getCountries
module.exports = obj