const chalk = require('chalk')
const yargs = require('yargs')
const notes = require ('./notes.js')

/*
1. set up the remove command to take a requires "--title" option
2. create and export a removeNote function from note.js
3. call emoveNote in remove command handler.
4. have removeNote log the title of the note to be removed.
5. test your work using: node app.js remove --title="some title"

*/

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    },
})

//creating remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        //attempt to remove a note.
        notes.removeNote(argv.title)
        //console.log('Removing a note')
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'read out a note',
    handler: function() {
        console.log('reading a note.')
    }
})


// read and list commands.
yargs.command({
    command: 'list',
    describe: 'listing out your notes',
    handler: function() {
        console.log('listing a note.')
    }
})

yargs.parse( )