
const { Manager, managerQuestionsArr } = require("./lib/ManagerClass.js");
const { Engineer, engineerQuestionsArr } = require("./lib/EngineerClass.js");
const { Intern, internQuestionsArr } = require("./lib/InterClass.js");

const inquirer = require("inquirer");
const writeFile = require("./src/writeFileInquirer");
const template = require("./src/template");

const teamArr = [];

const init = () => {managerQuestions()}

const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArr.push(manager);
        return employeePrompt();
    })
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArr.push(engineer);
        return employeePrompt();
    })
}

const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArr.push(intern);
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
        let typeOfEmployee = "";
        if (answer.typeOfEmployee === "Engineer") 
            {engineerQuestions()};
        if (answer.typeOfEmployee === "Intern") 
            {internQuestions()};
        if (answer.typeOfEmployee === "None, I'm finished buidling my team.") 
            {let html = template(teamArr)
            writeFile(html)};
    })
}

init();
