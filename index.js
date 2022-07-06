
const { Manager, managerQuestionsArr } = require("./lib/ManagerClass.js");
const { Engineer, engineerQuestionsArr } = require("./lib/EngineerClass.js");
const { Intern, internQuestionsArr } = require("./lib/InterClass.js");

const inquirer = require("inquirer");
// const writeFile = require("./src/teamProfiles")
const fs = require("fs");
const writeFile = require("./src/writeFileInquirer");
const template = require("./src/teamProfile");

const teamArr = [];
 
const employeeQuestionsArr = [
    {
        type: "list",
        name: "typeOfEmployee",
        message: "What type of employee would you like to add to your team profile?",
        choices: ["Engineer", "Intern", "None, I'm finished buidling my team."]
    }
]

async function init() { 
    managerQuestions() 
    const html = generateHtml(userInput);

    await writeFileAsync("teamProfile.html", hmtl);
}

const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then(answers => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArr.push(answers);
        return employeePrompt();
    })
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
    .then(answers => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
    .then(answers => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const employeePrompt = () => {
    inquirer.prompt([{
        type: "list",
        name: "typeOfEmployee",
        message: "What type of employee would you like to add to your team profile?",
        choices: ["Engineer", "Intern", "None, I'm finished buidling my team."]
    }])
    .then(answer => {
        if (answer.typeOfEmployee === "Engineer") 
            {engineerQuestions()};
        if (answer.typeOfEmployee === "Intern") 
            {internQuestions()};
        if (answer.typeOfEmployee === "None, I'm finished buidling my team.") 
            {
            let html = template(employeesArr)
            writeFile(html)};
    })
}

init();
