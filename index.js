// Required module exports from classes
const { Manager, managerQuestionsArr } = require("./lib/ManagerClass.js");
const { Engineer, engineerQuestionsArr } = require("./lib/EngineerClass.js");
const { Intern, internQuestionsArr } = require("./lib/InternClass.js");

const inquirer = require("inquirer");
const writeFile = require("./src/writeFileInquirer");
const template = require("./src/template");

// empty array to store user input after answering question prompts
const teamArr = [];

const init = () => {managerQuestions()}

// function to prompt manager questions
const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then(answers => {
        // user's answers to the prompts will become new object array and put into empty teamArr in global variable
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArr.push(manager);
        return employeePrompt();
    })
}

// function to prompt engineer questions
const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
    .then(answers => {
        // user's answers to the prompts will become new object array and put into empty teamArr in global variable
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamArr.push(engineer);
        return employeePrompt();
    })
}

// function to prompt intern questions
const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
    .then(answers => {
        // user's answers to the prompts will become new object array and put into empty teamArr in global variable
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamArr.push(intern);
        return employeePrompt();
    })
}

// function to prompt which type of employee the manager would like to add on their team
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
            // if manager answers that they would like to add 'Engineer', it will call the engineerQuestions function
        if (answer.typeOfEmployee === "Intern") 
            {internQuestions()};
            // if manager answers that they would like to add 'Intern', it will call the internQuestions function
        if (answer.typeOfEmployee === "None, I'm finished buidling my team.") 
            {let html = template(teamArr)
            writeFile(html)};
            /// if manager answers that they are finished adding team members, it will generate the HTML file
    })
}

init();
