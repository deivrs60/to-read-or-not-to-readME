// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github Username: (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else { 
                console.log('Please the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project and what it is meant to do: (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please type the relative path of your screenshot: (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the relative path to your screenshot!')
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run for dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Does the user need to know anything before using the repository?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know before contributing to the repository?',
    },
    {
        // Languages used
        type: 'checkbox',
        name: 'languages',
        messages: 'What languages did you make this project with? (Required: Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'React', 'SQL', 'MongoDB', 'Express', 'Markdown'],
        validate: nameCheckbox => {
            if(nameCheckbox) {
                return true;
            } else {
                console.log('Please choose at least one language!');
                return false;
            }
        }
    },
    { 
        // Licenses 
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    {
        inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
    
       //
       //

        })
    
    };
}

// Function call to initialize app
init() 
