const validator = require("validator");
const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");
// const msg = notes.getNotes();
// const msgs = chalk.green.inverse.bold("Success!");

// const command = process.argv[2];

// console.log(process.argv);

// console.log(msg);
// console.log(validator.isEmail("shaheenfgs@gmail.com"));
// console.log(chalk.blue("Hello world!"));
// console.log(msgs);

// if(command=== 'add'){
// console.log(chalk.green('The notes added sucessfully!'));
// }else if (command=== 'remove'){
//     console.log(chalk.red('The notes remove sucessfully!'));

// }

// Add a note
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Sample note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Sample note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// Remove a note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Sample note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  }
});

// List a notes
yargs.command({
  command: "list",
  describe: "List a note",
  handler() {
    notes.listNotes();
  }
});

// Read a notes
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Sample note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.readNotes(argv.title);
  }
});

// console.log(yargs.argv);
yargs.parse();
