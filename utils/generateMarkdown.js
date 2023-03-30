// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  fetch(`https://img.shields.io/badge/License-${questions.[7]}-${color}.svg`)
  .then((response) => (response.json))
  .then((data) => (fs.appendFile("README2", data)))
  if (Error) {
    console.error("");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  fetch(`https://opensource.org/licenses/${questions.[7]}`)
  .then((response) => (response.json))
  .then((data) => (fs.appendFile("README2", data)))
  if (Error) {
    console.error("");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {(fs.appendFile(`README2", "This project is licensed under the ${license} license.`)))
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  # Description
  ##
  # Table of Contents
  
  # Installation
  
  # Usage
  
  # License
  
  # BadgesBadge Colors
  
  # Features
  
  # How to Contribute

  # Tests
`;
if (Error) {
  console.error("");
}
}

module.exports = generateMarkdown;
