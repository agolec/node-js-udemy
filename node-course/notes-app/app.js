const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const notes = require ('./notes.js')

console.log(chalk.blue('error'))
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
    handler: (argv) => {
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
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'read out a note',
    builder: {
        title: {
            describe: 'Note title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})


// read and list commands.
yargs.command({
    command: 'list',
    describe: 'listing out your notes',
    handler: (argv) => {
        notes.listNotes(argv.title)
    }
})

yargs.parse( )