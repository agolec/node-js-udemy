
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

/*const url = 'http://api.weatherstack.com/current?access_key=531015d3106fd3263ae1028b52614cd4&query=34.0522,-118.2437&units=f'

request({ url: url, json: true }, (error, response) => {
   //should take in response in celcius from response.body.current.temperature and return it's fahrenheit equivalent.
   if(error){
      console.log('unable to connect to the weather service\n\n')
   } else if(response.body.error){
      console.log('unable to find location.')
   }
   
   else{
      console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + " degrees out gathered from a station in " + 
      response.body.location.country + ". It feels like " + response.body.current.feelslike + " outdoors.\n\n")
   }

  

})
*/



//       DO NOT DELETE THE NEXT 4 lines

// geocode('New Delhi', (error, data) => {
//    console.log('Error:', error)
//    console.log('Data: ', data)
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

/// -75.7088, 44.1545

forecast(-75.7088, 44.1545, (error, data) => {
   console.log('Error', error)
   console.log('Data', data)
 })



