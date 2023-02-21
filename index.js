const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerCard = require("./src/manager");
const engineerCard = require("./src/engineer");
const internCard = require("./src/intern");
const wrap = require("./src/wrapper");
const { log } = require("console");
const team = [];

const addManager = [
    // {
    //     name: "role",
    //     type: "confirm",
    //     message: "Would you like to start building you team",
    // },
    {
        type: "input",
        message: "Enter the manager's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter their employee id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter their email address",
        name: "email",
    },
    {
        type: "input",
        message: "Enter their office number",
        name: "officeNumber",
    },
    {
        type: "list",
        message: "What do you want to do next?",
        choices: ["Add an Engineer", "Add an Intern", "All Done"],
        name: "upNext",
    },
];

const addEngineer = [
    {
        name: "name",
        type: "input",
        message: "Enter the engineer's name",
    },
    {
        name: "id",
        type: "input",
        message: "Enter their employee id",
    },
    {
        name: "email",
        type: "input",
        message: "Enter their email address",
    },
    {
        name: "github",
        type: "input",
        message: "Enter their Github username",
    },
    {
        name: "upNext",
        type: "list",
        choices: ["Add an Engineer", "Add an Intern", "All Done"],
        message: "What do you want to do next?",
    },
];

const addIntern = [
    {
        name: "name",
        type: "input",
        message: "Enter the intern's name",
    },
    {
        name: "id",
        type: "input",
        message: "Enter their employee id",
    },
    {
        name: "email",
        type: "input",
        message: "Enter their email address",
    },
    {
        name: "school",
        type: "input",
        message: "Enter the school they are from",
    },
    {
        name: "upNext",
        type: "list",
        choices: ["Add an Engineer", "Add an Intern", "All Done"],
        message: "What do you want to do next?",
    },
];

question(addManager);

function question(answers) {
    inquirer
        .prompt(answers)
        .then((member) => {
            console.log(member);
            team.push(member);

            if (member.upNext === "Add an Engineer") {
                question(addEngineer);
            } else if (member.upNext === "Add an Intern"){
                question(addIntern)
            } else {
                makeProfile(team);
            }
        })
        .catch((err) => console.log(err));
}

function makeProfile(team) {
    const profiles = team.map((member) => {
        const { name, id, email } = member;
        if (member.hasOwnProperty("officeNumber")) {
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }
        if (member.hasOwnProperty("github")) {
            const { github } = member;
            return new Engineer(name, id, email, github);
        }
        if (member.hasOwnProperty("school")) {
            const { school } = member;
            return new Intern(name, id, email, school);
        }
    });
    genHtml(profiles);
}

function genHtml(profiles) {
    let allCards = "";
    profiles.forEach((profile)=> {
        if (profile instanceof Manager) {
            const card = managerCard(profile);
            allCards += card;
        }
        if (profile instanceof Engineer) {
            const card = engineerCard(profile);
            allCards += card;
        }
        if (profile instanceof Intern) {
            const card = internCard(profile);
            allCards += card;
        }        
    });
    const newHtml = wrap(allCards);
    writeFile(newHtml);
}

function writeFile(newHtml) {
    fs.writeFile("./dist/team.html", newHtml, (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("file created");
        }
    });    
};
