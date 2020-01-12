const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");


function promptUser() {
    return inquirer
      .prompt([
        {
          message: "Please enter your name",
          name: "name",
          type: "input"
        },
        {
          message: "Please enter your id",
          name: "id",
          type: "number"
        },
        {
          message: "Please enter your email",
          name: "email",
          type: "input"
        },
        {
          message: "Please enter your Role",
          name: "role",
          type: "list",
          choices: [
            'Manager',
            'Engineer',
            'Intern',
          ]
        }
      ]);
  }

  function generateRoleQ(input) {
    if (input.role === 'Manager') {
      return inquirer.prompt([
        {
          message: "Enter your office number",
          name: "officenumber",
          type: "number"
        }
      ])
    }
  
    if (input.role === 'Intern') {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'school',
          message: 'Enter name of your School'
        }
      ]);
    }
  
    if (input.role === 'Engineer') {
      return inquirer.prompt([
        {
          message: "Enter your github account name",
          name: "github",
          type: "input"
        }
      ])
    }
  }