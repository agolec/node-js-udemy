const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')    
})

app.get('/help', (req,res) => {
    res.send([{
        name:'Adam'
    },{
        name:'Sarah'
    }])
})

//update routes of 'about' to have a large html title

//update 'weather' to send back a JSON object with forecast and location strings.



app.get('/about', (req,res) => {
    res.send('about page')
})

app.get('/weather', (req,res) => {
    res.send('Weather Page')
})
app.listen(3000, () => { 
    console.log('Server is up on port 3000')
})
