const chalk = require('chalk')
const yargs = require('yargs')
const notes = require ('./notes.js')

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
        notes.removeNote(argv.title)
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