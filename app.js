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