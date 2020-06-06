const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')    
})

app.get('/help', (req,res) => {
    res.send([{
        name:'Adam',
        age:30
    },
{
    name:'Sarah',
    age: 31
}])
})

app.get('/about', (req,res) => {
    res.send('about page')
})

app.get('/weather', (req,res) => {
    res.send('Weather Page')
})
app.listen(3000, () => { 
    console.log('Server is up on port 3000')
})
