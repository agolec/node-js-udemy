const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = function () {
  return "Your notes...";
};

const readNote = (title) => {
  const notes = loadNotes();

  const noteToRead = notes.find((note) => note.title === title);

  if (noteToRead) {
    console.log(chalk.grey("Note being read: " + noteToRead.title + "\n"));
    console.log("Body: " + noteToRead.body);
  } else {
    console.log(
      chalk.red.inverse(
        "Note by title '" + title + "' doesn't exist. Note not printed."
      )
    );
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title != title);
  //if length of these two arrays are the same after processing, then
  //the note wasn't found/ Printing error message.
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note " + title + " was removed."));
    saveNotes(notesToKeep);
  } else {
    console.log(
      chalk.red.inverse(
        "Note with title " + title + " was not found. Could not delete anything"
      )
    );
  }
};

const listNotes = () => {
  console.log("listing your notes: ");

  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(chalk.inverse.white(note.title));
  });
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added."));
  } else {
    console.log(
      chalk.red.inverse("Note title is already taken! Note not added to list.")
    );
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJsON);
};

const loadNotes = () => {
  //try to read from note.json and then take the data buffer, and put it into dataJSON.
  //then return the parsed JSON.
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
