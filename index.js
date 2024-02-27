const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
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

};

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'logo.svg');
svg.setAttribute('width', '300');
svg.setAttribute('height', '200');


const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Your logo has been created');
    });
};

const init = () => {
    promptUser()
    .then((answers) => writeToFile('logo.svg', generateImage(answers)))
    .then(() => console.log('Your logo has been created'))
    .catch((err) => console.error(err));
};

init();

module.exports = { promptUser };