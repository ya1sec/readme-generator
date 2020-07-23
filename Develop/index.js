// DEPENDENCIES =========================
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// // array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter your table of contents:",
    name: "contents",
  },
  {
    type: "input",
    message: "Explain the installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Input usage guide:",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a license:",
    name: "license",
    choices: ["MIT", "Apache", "GNU GPLv3", "ISC"],
  },
  {
    type: "input",
    message:
      "State if you are open to contributions and what your requirements are for accepting them:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Link to any tests:",
    name: "tests",
  },
  {
    type: "input",
    message: "Great! Now give us your Github username: ",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// // function to write README file
// function writeToFile(fileName, data) {}

//
inquirer
  .prompt(questions)

  .then(function (response) {
    console.log(response);
    const responseData = { ...response };
    // const markdownText = formatMarkdown(responseData);

    fs.writeFile("README.md", JSON.stringify(responseData), (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });

// function to initialize program
// function init() {}

// // function call to initialize program
// init();
