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