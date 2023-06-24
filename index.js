// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const { questions, genMD } = require('./lib');

prompt(questions).then(genMD);

