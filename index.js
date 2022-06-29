
const Manager = require("./lib/ManagerClass.js");
const Engineer = require("./lib/EngineerClass.js");
const Intern = require("./lib/InterClass.js");

const inquirer = require("inquire");
const fs = require("fs");

teamArr = [];

const managerQuestionsArr = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }
]

const engineerQuestionsArr = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is the engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
    }
]    
const internQuestionsArr = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is the intern's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
    }
]  

const employeeQuestionsArr = [
    {
        type: "list",
        name: "typeOfEmployee",
        message: "What type of employee would you like to add to your team profile?",
        choices: ["Engineer", "Intern", "None, I'm finished buidling my team."]
    }
]


