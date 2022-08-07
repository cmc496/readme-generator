const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project titled?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of project."
    },
    {
        type: "installation",
        name: "installations",
        message: "Are there any installations required to run this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the primary use for this application?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Please list all who contributed to this project."
    },
    {
        type: "input",
        name: "tests",
        message: "Provide testing instructions if applicable."
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license(s) is applicable to this project?",
        choices: ["MIT License", "Apache License", "Mozilla", "Other"]
    },
    {
        type: "input",
        name: "gitName",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide an email to contact you with questions."
    },
    {
        type: "input",
        name: "URL",
        message: "Please provide the URL for the deployed application."
    }
];

module.exports = {
    questions: questions,
};