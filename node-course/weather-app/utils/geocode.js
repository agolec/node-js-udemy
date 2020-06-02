const request = require ('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWdvbGVjIiwiYSI6ImNrYWx1MWNseDE1dHoycmw2MXE1bmNlZWkifQ.98L-uyyu71PEHtQ-JYwaNg&limit=1'
 
    request({ url, json: true}, (error, {body}) => {
       if (error) {
          //bringing back the error. Allowing the user to do what they want with the error variable when it returns from geocode.
          callback('Unable to connect to location services!', undefined)
       } else if (body.features.length === 0){
          callback('Unable to find location. Try another search.', undefined)
       } else {
          callback(undefined, {
             latitude: body.features[0].center[1],
             longitude: body.features[0].center[0],
             location: body.features[0].place_name
          })
       }
    })
 }

 module.exports = geocode