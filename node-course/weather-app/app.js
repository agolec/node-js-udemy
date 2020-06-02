const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(process.argv)

const location = process.argv[2]

if(!location){
   console.log('there is no city or country name entered.')
} else {
 geocode(location, (error, data) => {
    if(error){
       return console.log(error)
    }

   forecast(data.longitude, data.latitude, (error, forecastData) => {
      if(error){
         return console.log(error)
      }
      console.log(data.location)
      console.log(forecastData)
   })
 })
}

