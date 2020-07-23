// function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === "Apache") {
    let licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (data.license === "GNU GPLv3") {
    let licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (data.license === "MIT") {
    let licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license === "ISC") {
    let licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }

  return `
  # ${data.title}

  ${data.description}
  
  ## Table of Contents

  ${data.toc}

  ## Installation

  ${data.installation}
  
  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}
  
  ## Questions?

  ${data.username}

  ${data.email}  
  `;
}

module.exports = generateMarkdown;
