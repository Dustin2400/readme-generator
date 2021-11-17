// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a description for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are your project's installation instructions?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What usage information can you provide?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'image',
        message: 'Provide the relative path for an image of your application'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What liscence do you have?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide liscence!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide contributors!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are tests for your application?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide application tests!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide e-mail address!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            console.log('File Created!')
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        const pageMarkdown = generateMarkdown(answer);
        writeToFile('generatedREADME.md', pageMarkdown);
    });
}

// Function call to initialize app
init()
