// Imported required packages
// 'fs', 'path', 'inquirer', './utils/generateMarkdown'
const fs=require('fs');
const inquirer=require('inquirer');
const generateMarkdown=require('./utils/generateMarkdown')

// Function to write README file using the user input
// function writeToFile(fileName, data) {
//   // TODO:
//   // fs write function to create the README.md file
//   // path package can be used to create the file path
// }
  inquirer.prompt([
    {
      // question object for github user name
      type: "input",
      name: "github",
      message: "What is your github username",
    },
    {
      // question object for email
      type: "input",
      name: "email",
      message: "What is your email",
    },
    {
      // question object for project name
      type: "input",
      name: "title",
      message: "What is the title of you project",
    },
    {
      // question object for the description
      type: "input",
      name: "description",
      message: "describe your project",
    },
    {
      // question object for license
      type: "list",
      name: "license",
      message: "choose license",
      choices: ["MIT", "Apache 2.0", "GNU GPL v3", "None"],
    },
    {
      // question object for the installation instruction with default
      type: "input",
      name: "installation",
      message: "input installation instructions",
    },
    {
      // question object for test with default
      type: "input",
      name: "test",
      message: "test for default",
    },
    {
      // question object for usage of the repo
      type: "input",
      name: "usage",
      message: "enter usage info",
    },
    {
      // question object for contributing to the repo
      type: "input",
      name: "contribution",
      message: "Enter contribution guidelines",
    },
  ]).then((data)=>{
    fs.writeFile('README.md', generateMarkdown(data), (err)=> 
        err? console.log(err) : console.log('Generating README')
    );
});

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
