const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const removeNote = function (title) {
    const notes = loadNotes()

    const matchingTitle = notes.filter(title)

    if(matchingTitle === title){
        console.log('title was found and is being removed')
    } else {
        console.log('title was not found.')
    }
    
}

const addNote = function(title, body) {
   
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })
    
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
         })
         saveNotes(notes)
         console.log('New Note Added.')
    } else {
        console.log('Note title is already taken! Note not added to list.')
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    //try to read from note.json and then take the data buffer, and put it into dataJSON.
    //then return the parsed JSON.
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}

