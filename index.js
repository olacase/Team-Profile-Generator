const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function initIndex() {
    beginHtml();
    addTeammate();
}

function addTeammate() {
    inquirer.prompt([{
        message: "Enter team member's name? (Required)",
        name: "name",
        validate: nameInput => {
            if (nameInput){
                return true
            }
            else{
                console.log('Please enter a valid response!');
                return false
            }
        }
        
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let promptInfo = "";
        if (role === "Engineer") {
            promptInfo = "GitHub username";
        } else if (role === "Intern") {
            promptInfo = "school name";
        } else {
            promptInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${promptInfo}`,
            name: "promptInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({promptInfo, moreMembers}) {
            let newTeam;
            if (role === "Engineer") {
                newTeam = new Engineer(name, id, email, promptInfo);
            } else if (role === "Intern") {
                newTeam = new Intern(name, id, email, promptInfo);
            } else {
                newTeam = new Manager(name, id, email, promptInfo);
            }
            employees.push(newTeam);
            addHtml(newTeam)
            .then(function() {
                if (moreMembers === "yes") {
                    addTeammate();
                } else {
                    endHtml();
                }
            });
            
        });
    });
}


function beginHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-light bg-light mb-5">
            <span class="navbar-brand mb-3 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./_dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("begin!");
}

function addHtml(team) {
    return new Promise(function(resolve, reject) {
        const name = team.getName();
        const role = team.getRole();
        const id = team.getId();
        const email = team.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = team.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = team.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = team.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./_dist/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function endHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./_dist/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}


initIndex();