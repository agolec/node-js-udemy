const request = require('request')

const forecast = (longitude, latitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=531015d3106fd3263ae1028b52614cd4&query='+ latitude + ','+ longitude + '&units=f'
    
    request({ url: url, json: true }, (error, response) => {
        if(error){
           callback('unable to connect to the weather service\n\n', undefined)
        } else if(response.body.error){
            callback('unable to find location.', undefined)
        } else{
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + " degrees out gathered from a station in " + 
            response.body.location.country + ". It feels like " + response.body.current.feelslike + " outdoors.\n\n")
        }
    })
}
module.exports = forecast
