const questions = [
  {
    type: "input",
    message: "What is the title for your project?",
    name: "Title",
  },
  // {
  //   type: "checkbox",
  //   message: "Which sections do you need for your Markdown file?",
  //   name: "Sections",
  //   choices: [
  //     "Description",
  //     "Table of Contents",
  //     "Installation",
  //     "Usage",
  //     "Credits",
  //     "License",
  //     "Badges",
  //     "Badge Colors",
  //     "Features",
  //     "How to Contribute",
  //     "Tests",
  //   ],
  // },
  {
    type: "input",
    message: "What would you like to put in the Description section?",
    name: "Description",
  },
  // {
  //   type: "input",
  //   message: "What would you like to put in the Table of Contents?",
  //   name: "Table",
  // },
  {
    type: "input",
    message: "What would you like to put in the Installation scetion?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What would you like to put in the Usage section?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What would you like to put in the Credits section?",
    name: "Credits",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "License",
    choices: ['MIT','BSD','PACHE','None']
  },
  {
    type: "input",
    message: "What would you like to put in the Badges section?",
    name: "Badges",
  },
  {
    type: "input",
    message: "What would you like to put in the Features section?",
    name: "Features",
  },
  {
    type: "input",
    message: "What would you like to put in the How to Contribute section?",
    name: "Contribute",
  },
  {
    type: "input",
    message: "What would you like to put in the Tests section?",
    name: "Tests",
  },
  {
    type: "input",
    message: "Is there anything else you'd like to add?",
    name: "Add",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?"
  }
];

module.exports = questions;