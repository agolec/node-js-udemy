const chalk = require('chalk')
const getNotes = require ('./notes.js')

const message = getNotes();
const successMsg = 'Success!'
console.log(message)

console.log(chalk.green(successMsg))
/*
use the chalk library in your project.

1. install 2.4.1 version of chalk.
2. Load chalk into app.js
3. Use this to print the sting "success!" to the console in green.
4. Test your work.

*/