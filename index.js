// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is your project title?',
    name: 'title',},

    {type: 'input',
    message: 'What is your project description?',
    name: 'description',}, 

    {type: 'input',
    message: 'What are the installation instructions?',
    name: 'install',}, 

    {type: 'input',
    message: 'How do you use this project?',
    name: 'usage',}, 

    {type: 'input',
    message: 'How do you contribute to this project?',
    name: 'contribute',}, 

    {type: 'input',
    message: 'How do you test this project?',
    name: 'tests',}, 

    {type: 'input',
    message: 'What is your Github username?',
    name: 'github',}, 

    {type: 'input',
    message: 'What is your email address?',
    name: 'email',}, 

    {type: 'list',
    message: 'What is the license for this project?',
    name: 'license',
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause"],
}, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        let genMarkdown = generateMarkdown(answers);
    fs.writeFile('readme.md', genMarkdown, (err) => 
    err ? console.log(err) : console.log('Successfully created readme.md!')
    );
    });
};

// Function call to initialize app
init();
