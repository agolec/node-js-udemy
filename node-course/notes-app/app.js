//the require statement loads in the fs core node module.

//this loads the File System module and assigns it to the constant 'fs'.

const fs = require('fs')


//we can now refer to the fs module by the constant name 'fs', and then . and it's methods.
fs.writeFileSync('notes.txt', 'my name is blah.');

//every time we re-run this, the notes.txt file will be over-ridden.

//Challange from section 3 video 9.

/*
1. use appendFileSync method to append to the existing notes.txt file.
2. Run the script again.
3. Check work by opening notes.txt and viewing the appended text.

Prior to appending, text is "my name is blah'. "
*/

try {
    fs.appendFileSync('notes.txt',' My name is actually not blah. It is Adam.');
    console.log('Data added to file. Check by opening.');
} catch (e) {
    console.log('errors occurred. Could not append to file.');
}