// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Create an array of questions for user input
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const renderLicense = require('./Develop/utils/renderLicense').renderLicense;
const questions = require('./Develop/utils/questions').questions;

const writeFileAysnc = util.promisify(fs.writeFile);

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        answers.renderLicense = renderLicense(answers.license);
        let readMe = generateMarkdown(answers);
        await writeFileAysnc("new-README.md", readMe);
    } catch (err) {
        throw err;
    }
}

init();