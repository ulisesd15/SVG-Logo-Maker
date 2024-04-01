const inquirer = require('inquirer');
const fs = require('fs');

class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            maxLength: 3,
            message: 'Enter the text for your logo: (Max 3 characters)'
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a text color for your logo: '
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Enter the shape of your logo:',
            choices: ['square', 'circle', 'triangle']
        }, 
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color fot he shape of your logo: '
        }
    ])
    .then((answers) => this.createSVG(answers))
    .catch((err) => console.error(err));

};

module.exports = { promptUser };
