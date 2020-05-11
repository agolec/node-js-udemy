const fs = require('fs')
/*
const book = {
    title: 'Ego is the Enemy',
    author:'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.title)
*/

//1. load and parse the JSON data
//2. Change the name and age property using your info
//3. Stringify the changed object and overwrite the original data.
//4. Test the work by viewing data in the JSON file.

const dataBuffer = fs.readFileSync('1-json.json')
const myDataJSON = dataBuffer.toString()
const user = JSON.parse(myDataJSON)

user.name = 'someName'
user.age = '34'

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)





