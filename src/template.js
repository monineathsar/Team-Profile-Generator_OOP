// creates the team profile div inside starter HTML code in buildTeam function below
const teamProfileDiv = buildTeam => {
    // builds the manager team card
    const managerHtmlSection = managerInput => {
        return `
    <section class="profileCard">
        <div class="cardHeader">
            <h2>${managerInput.getName()}</h2>
            <h3>Role: ${managerInput.getRole()}</h3>
        </div>
        <div class="list">
            <ul>
                <li>ID: ${managerInput.getId()}</li>
                <li>Email: <a href="mailto:${managerInput.getEmail()}" style="text-decoration:none">${managerInput.getEmail()}</a>
                </li>
                <li>Office Number: ${managerInput.getOfficeNumber()}</li>
            </ul>
        </div>
    </section>`;
    };

    // builds the engineer team card
    const engineerHtmlSection = engineerInput => {
        return `
    <section class="profileCard">
        <div class="cardHeader">
            <h2>${engineerInput.getName()}</h2>
            <h3>${engineerInput.getRole()}</h3>
        </div>
        <div class="list">
             <ul>
                <li>ID: ${engineerInput.getId()}</li>
                <li>Email: <a href="mailto:${engineerInput.getEmail()}" style="text-decoration:none">${engineerInput.getEmail()}</a>
                </li>
                <li>GitHub: 
                <a href="https://github.com/${engineerInput.getGitHub()}" target="_blank" style="text-decoration:none">github.com/${engineerInput.getGitHub()}</a>
                </li>
            </ul>
        </div>
    </section>`;
    };

    // builds the intern team card
    const internHtmlSection = internInput => {
        return `
    <section class="profileCard">
        <div class="cardHeader">
            <h2>${internInput.getName()}</h2>
            <h3>${internInput.getRole()}</h3>
        </div>
        <div class="list">
            <ul>
                <li>ID: ${internInput.getId()}</li>
                <li>Email: <a href="mailto:${internInput.getEmail()}" style="text-decoration:none">${internInput.getEmail()}</a>
                </li>
                <li>School: ${internInput.getSchool()}</li>
            </ul>
        </div>
        </section>`;
    };

    // puts all the team cards into this empty array object
    const writeHtml = [];

    // takes the manager team card HTML code and puts it into empty writeHtml array
    writeHtml.push(buildTeam
        .filter(employee => employee.getRole() === "Manager")
        .map(managerInput => managerHtmlSection(managerInput))
    );
    // takes the engineer team card HTML code and puts it into empty writeHtml array
    writeHtml.push(buildTeam
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineerInput => engineerHtmlSection(engineerInput))
    );
    // takes the intern team card HTML code and puts it into empty writeHtml array
    writeHtml.push(buildTeam
        .filter(employee => employee.getRole() === "Intern")
        .map(internInput => internHtmlSection(internInput))
    );
    return writeHtml.join("");
}

// export function into index.js file
module.exports = buildTeam => {
    // adds team profile cards div inside starter HTML code
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/style.css">
        <title>Team Profile</title>
    </head>

    <body>
        <h1>My Team</h1>
        <div class="profileBox">
        ${teamProfileDiv(buildTeam)}
        </div>
    </body>
        
    </html>
    `
};