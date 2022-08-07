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
    * [License](#license)
    * [Contributions](#contributions)
    * [Questions](#questions)
    ___
    ## Installation
    ${data.installation}

    ## License
    * ${data.renderLicense}

    ## Contributions
    ${data.contributions}

    ## Questions
    ${data.questions}`;
}

module.exports = generateMarkdown;