// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is your user name?',
    name: 'username',}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then ((response) => {
    fs.writeToFile('readme.md', generateMarkdown({response})
    )
}
)
}

// Function call to initialize app
init();