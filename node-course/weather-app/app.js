const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(process.argv)

const address = process.argv[2]

if(!address){
   console.log('there is no city or country name entered.')
} else {
   
 geocode(address, (error, {latitude, longitude, location} = {}) => {
    if(error){
       return console.log(error)
    }

   forecast(longitude, latitude, (error, forecastData) => {
      if(error){
         return console.log(error)
      }
      console.log(location)
      console.log(forecastData)
   })
 })
}

