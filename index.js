//Node Modules
const inquirer = require("inquirer");
const fs = require("fs");
//Import
const generateMarkdown = require("./utils/generateMarkdown");

//inquirer to generate questions
const promptUser = () => {
  return inquirer.prompt([
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
      name: "title",
      message: "",
    },
    {
      type: "input",
      name: "title",
      message: "Installation Requirements",
    },
    {
      type: "input",
      name: "title",
      message: "Usage",
    },
    {
      type: "input",
      name: "title",
      message: "Contributing Guidelines",
    },
    {
      type: "input",
      name: "title",
      message: "Test",
    },
    {
      type: "input",
      name: "title",
      message: "Questions",
      //Push contact name, gihHub profile and ways to contact here.
    },
  ]);
};

function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

function init() {
  promptUser().then((data) => {
    console.log(data);
    const pageMD = generateMarkdown(data);
    writeToFile("./output/readme.md", pageMD);
  });
}

init();

// TODO: Include packages needed for this application - Done
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
