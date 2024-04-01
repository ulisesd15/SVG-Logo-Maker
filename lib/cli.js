const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Square, Circle, Triangle } = require('./shapes.js');

class CLI {
    run() {
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
                    message: 'Enter the color for the shape of your logo: '
                }
            ])
        
        }
        const writeToFile = (fileName, data) => {
            const outputPath = `./examples/${fileName}`;
            fs.writeFile(outputPath, data, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Your logo has been created');
            });
        };


        const init = () => {
            promptUser()
                .then((answers) => {
                    let shapeObj;
                    switch (answers.shape) {
                        case 'square':
                            shapeObj = new Square(answers.text, answers.color, answers.shapeColor);
                            break;
                        case 'triangle':
                                shapeObj = new Triangle(answers.text, answers.color, answers.shapeColor);
                                break;
                        case 'circle':
                            shapeObj = new Circle(answers.text, answers.color, answers.shapeColor);
                            break;
                        
                    }
                    const svgLogo = shapeObj.render();
                    writeToFile('logo.svg', svgLogo);
                })
                .catch((err) => console.error(err));
        };

        init();
    }
}

module.exports = CLI;