//challange from section 3 section 10.

/*
definine a function in a new file.

1. create a new file called notes.js
2. create getNotes function that returns "Your notes..."
3. export getnotes function.
4. from app.js, load in and call the function to console.
*/
const getNotes = require ('./notes.js')

const message = getNotes();

console.log(message);