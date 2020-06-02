const request = require('request')

const forecast = (longitude, latitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=531015d3106fd3263ae1028b52614cd4&query='+ latitude + ','+ longitude + '&units=f'
    
    request({ url, json: true }, (error, {body}) => {
        if(error){
           callback('unable to connect to the weather service\n\n', undefined)
        } else if(body.error){
            callback('unable to find location.', undefined)
        } else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + " degrees out gathered from a station in " + 
            body.location.country + ". It feels like " + body.current.feelslike + " outdoors.\n\n")
        }
    })
}
module.exports = forecast
