//This is going to show HTTPS requests made without requiring npm libraries.
const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=531015d3106fd3263ae1028b52614cd4&query=40,-75&units=f'

const request = http.request(url,( response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()

    
