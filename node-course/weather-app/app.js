
const geocode = require('./utils/geocode')

/*const url = 'http://api.weatherstack.com/current?access_key=531015d3106fd3263ae1028b52614cd4&query=34.0522,-118.2437&units=f'

request({ url: url, json: true }, (error, response) => {
   //should take in response in celcius from response.body.current.temperature and return it's fahrenheit equivalent.
   if(error){
      console.log('unable to connect to the weather service\n\n')
   } else if(response.body.error){
      console.log('unable to find location.')
      console.log('Error code is: ' + response.body.error.code)
      console.log('Error code description is: ' + response.body.error.info)
   }
   
   else{
      console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + " degrees out gathered from a station in " + 
      response.body.location.country + ". It feels like " + response.body.current.feelslike + " outdoors.\n\n")
   }

  

})
*/

// Geocoding
// Address -> Latitude/Longitude -> Weather

// const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Kenya.json?access_token=pk.eyJ1IjoiYWdvbGVjIiwiYSI6ImNrYWx1MWNseDE1dHoycmw2MXE1bmNlZWkifQ.98L-uyyu71PEHtQ-JYwaNg&limit=1'

// request({ url: geocodingURL, json: true }, (error, response) => {

  

//    if(error){

//       console.log('unable to connect to the weather service\n\n')

//    } else if(response.body.features.length === 0) {

//       console.log('Location did not return results. Try another city or country name.\n\n')
      
//    }
//    else {

//       const latitude = response.body.features[0].center[1]
//       const longitude = response.body.features[0].center[0]
//       const name = response.body.features[0].place_name
//       console.log('lat is ' + latitude + ' and long is ' + longitude )
//       console.log('The place searched is ' + name + '. The coordinates of ' + name + ' are: ' + latitude + ' and ' + longitude )

//    }


// })



geocode('New Delhi', (error, data) => {
   console.log('Error:', error)
   console.log('Data: ', data)
})



