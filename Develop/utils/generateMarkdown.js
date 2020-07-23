// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ${data.description}
  
  ## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contributing](#contributing)
  4. [Tests](#tests)
  5. [Contact](#contact)



  ## Installation

  ${data.installation}


  ## Usage

    ${data.usage}

  
  ## Contributing

  ${data.contributing}


  ## Tests

    ${data.tests}
  
  
  ## Contact

  GitHub: [${data.username}](https://github.com/${data.username})

  ${data.email}  
  `;
}

module.exports = generateMarkdown;
