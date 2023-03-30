// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: InputPrompt } = require('inquirer/lib/prompts/input');
const generation = require("./generateMarkdown")
const README2 = require("README2.md")
let data = "New File Contents"
// TODO: Create an array of questions for user input
const questions =
    inquirer
    .prompt[
    {
        type : "input",
        message : "What is the title for your project?",
        name : "Title",
    },
    {
        type : "checkbox",
        message : "Which sections do you need for your Markdown file?",
        name : "Sections",
        choices : ["Description", "Table of Contents", "Installation", "Usage", "Credits", "License", "Badges", "Badge Colors", "Features", "How to Contribute", "Tests"],
    },
    {
        type : "input",
        message : "What would you like to put in the Description section?",
        name : "Description",
    },
    {
        input : "input",
        message : "What would you like to put in the Table of Contents?",
        name : "Table",
    },
    {
        input : "input",
        message : "What would you like to put in the Installation scetion?",
        name : "Installation",
    },
    {
        input : "input",
        message : "What would you like to put in the Usage section?",
        name : "Usage",
    },
    {
        input : "input",
        message : "What would you like to put in the Credits section?",
        name : "Credits",
    },
    {
        input : "input",
        message : "What would you like to put in the License section?",
        name : "License",
    },
    {
        input : "input",
        message : "What would you like to put in the Badges section?",
        name : "Badges",
    },
    {
        input : "input",
        message : "What color is the badge that you would like to use?",
        name : "Color",
    },
    {
        input : "input",
        message : "What would you like to put in the Features section?",
        name : "Features",
    },
    {
        input : "input",
        message : "What would you like to put in the How to Contribute section?",
        name : "Contribute",
    },
    {
        input : "input",
        message : "What would you like to put in the Tests section?",
        name : "Tests",
    },
    {
        input : "input",
        message : "Is there anything else you'd like to add?",
        name : "Add",
    }
    ];

// TODO: Create a function to write README file
function writeToFile(README2, data) {
    for (var i = 0; i < 14; i++) {
    prompt(`${questions.prompt[i]}`);
}};

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();
