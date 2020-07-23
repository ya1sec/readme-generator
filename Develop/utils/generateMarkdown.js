// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${data.description}
  
  ## Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)



  ## Installation

  ${data.installation}


  ## Usage

    ${data.usage}

  
  ## Contributing

  ${data.contributing}


  ## Tests

    ${data.tests}
  
  
  ## Questions?

  GitHub: [${data.username}](https://github.com/${data.username})

  ${data.email}  
  `;
}

module.exports = generateMarkdown;

// if (data.license === "Apache") {
//   return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
// } else if (data.license === "GNU GPLv3") {
//   return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
// } else if (data.license === "MIT") {
//   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
// } else if (data.license === "ISC") {
//   return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
// }
