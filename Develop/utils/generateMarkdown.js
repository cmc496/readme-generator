// Create a function that returns a license badge based on which license is passed in
const renderLicense = require('./renderLicense');

// If there is no license, return an empty string
function generateMarkdown(data) {
  return `
  ---
  # ${data.title}</br>
    ${data.description}</br>
    Deployed: ${data.URL}</br>
    ___
    ## Table of Contents</br>
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
    ___
    ## Installation</br>
    ${data.installation}</br>

    ## Usage</br>
    ${data.usage}</br>

    ## License</br>
    * ${data.renderLicense}</br>

    ## Contributions</br>
    ${data.contributions}</br>

    ## Tests</br>
    ${data.tests}</br>

    ## Questions</br>
    ${data.questions}`;
}

module.exports = generateMarkdown;