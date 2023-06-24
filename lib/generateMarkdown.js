const { log } = require('console');
const { writeFile } = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   fetch(`https://opensource.org/licenses/${questions.[7]}`)
//   .then((response) => (response.json))
//   .then((data) => (fs.appendFile("README2", data)));
//   if (Error) {
//     console.error("");
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   (fs.appendFile(`README2", "This project is licensed under the ${license} license.`));
//   if (Error) {
//     console.error("");
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `# ${data.Title}
  ${data.License=='None' ? '' : `![${data.License}](https://img.shields.io/badge/License-${data.License}-red.svg)`}

  ## Description
  ${data.Description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How To Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Credits
  ${data.Credits}
  ## License
  ${data.License}
  ## Features
  ${data.Features}
  ## How to Contribute
  ${data.Contribute}
  ## Tests
  ${data.Tests}
  ## Questions
  If there are any concerns, you can [email](mailto:${data.Email}) or connect via [github](https://github.com/${data.GitHub}).
`;

  writeFile('./dist/README.md', output, err => {
    if(err) console.log(err);
    console.log('README.md created in the "dist" folder!!!');
  })
}

module.exports = generateMarkdown;

