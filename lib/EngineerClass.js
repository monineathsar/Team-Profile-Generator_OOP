const Employee = require("./EmployeeClass");

const engineerQuestionsArr = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
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

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = {Engineer, engineerQuestionsArr};