const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text for your logo: (Max 3 characters)'
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a text color for your logo: '
        },
        {
            type: 'input',
            name: 'shape',
            message: 'Enter the shape of your logo: (circle, square, or triangle)'
        }, 
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color fot he shape of your logo: '
        }
    ])

};