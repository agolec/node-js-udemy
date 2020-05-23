const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=531015d3106fd3263ae1028b52614cd4&query=9.916989,78.131406'

request({ url: url }, (error, response) => {
   console.log(response)
})