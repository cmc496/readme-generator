// Create a function that returns a license badge based on which license is passed in
const renderLicense = require('./renderLicense');

// If there is no license, return an empty string
function generateMarkdown(data) {
  return `
  ---
  # ${data.title}
    ${data.description}
    Deployed: ${data.URL}
    ___
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
    ___
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    * ${data.renderLicense}

    ## Contributions
    ${data.contributions}

    ## Tests
    ${data.tests}

    ## Questions
    ${data.questions}`;
}

module.exports = generateMarkdown;