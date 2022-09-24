//Node Modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//Import
const generateMarkdown = require("./utils/generateMarkdown");

//inquirer to generate questions

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please, enter your GitHub Username",
  },
  {
    type: "input",
    name: "title",
    message: "Hello, what is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write the description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation Requirements",
  },
  {
    type: "input",
    name: "usage",
    message: "How do we use your application?",
  },
  {
    type: "list",
    name: "license",
    message: "What license did you use?",
    choices: ["The MIT License", "Apache License", "GNU License", "N/A"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "I need a value to continue";
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "How to contribute",
  },
  {
    type: "input",
    name: "questions",
    message: "Where to send questions",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./output/readme.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve("ok");
    });
  });
}

function init() {
  promptUser(questions)
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((readmeMarkdown) => {
      return writeToFile(readmeMarkdown);
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();

// TODO: Include packages needed for this application - Done
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
