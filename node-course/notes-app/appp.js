const fs = require('fs')
const FILE_NAME = 'notes2.txt'
const CONTENT = Math.floor(Math.random() * 10) + 1

fs.appendFileSync(FILE_NAME,'\n' + CONTENT)

//Challenge: append to your existing file.