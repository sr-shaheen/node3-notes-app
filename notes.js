const fs = require("fs");
const chalk = require("chalk");

// const getNotes = function() {
//   return "my notes for checking";
// };

const addNotes = (title, body) => {
  const notes = loadNotes();
  // const dupliateNode = notes.filter(notes => notes.title === title);
  const dupliateNode = notes.find(notes => notes.title === title);

  debugger
  // if (dupliateNode.length === 0) {
  if (!dupliateNode) {
    notes.push({
      title: title,
      body: body
    });

    saveNotes(notes);
    console.log("New node added");
  } else {
    console.log("This title taken.");
  }
};

const removeNotes = function(title) {
  const notes = loadNotes();
  const updateNode = notes.filter(notes => notes.title !== title);

  if (notes.length > updateNode.length) {
    saveNotes(updateNode);
    console.log(chalk.green("Removed"));
  } else {
    console.log(chalk.red("Not removed!"));
  }
};

const saveNotes = notes => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync("notes.json");
    const jsonData = bufferData.toString();
    return JSON.parse(jsonData);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  debugger
  notes.forEach(element => {
    console.log(chalk.blue(element.title));
  });
};

const readNotes = title => {
  const notes = loadNotes();
  const note = notes.find(node => node.title === title);
  if (note) {
    console.log(chalk.green(note.title));
    console.log(chalk.green(note.body));
  } else {
    console.log(chalk.red("Note is not find"));
  }
};

module.exports = {
  // getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
};
