const chalk = require('chalk')
const getNotes = require ('./notes.js')

const command = process.argv[2]
console.log(process.argv)

if(command === 'add' ) {
    console.log('Adding node')
}
else if(command === 'remove') {
    console.log('removing note')
}