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
        message: 'Please enter your Github Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project and what it is meant to do:'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please type the relative path of your screenshot'
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
    },
    { 
        // Licenses 
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
