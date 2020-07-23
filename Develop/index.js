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
    message: "Explain your application's installation instructions:",
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
      "State if you are open to contributions and what your requirements might be for accepting them:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Describe the testing instructions for your program:",
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
    const data = { ...response };
    const markdownText = generateMarkdown(data);

    fs.writeFile("README.md", markdownText, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    });
  });
