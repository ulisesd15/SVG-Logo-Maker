const { Shape, Square, Circle, Triangle } = require('./shapes.js');

describe('Shape Classes', () => {
    let square, circle, triangle;

    beforeEach(() => {
        square = new Square('Square', 'blue', 'red');
        circle = new Circle('Circle', 'green', 'yellow');
        triangle = new Triangle('Triangle', 'purple', 'orange');
    });

    test('Square should render correctly', () => {
        const squareSVG = square.render();
        expect(squareSVG).toContain('<rect');
        expect(squareSVG).toContain('fill=');
    });

    test('Circle should render correctly', () => {
        const circleSVG = circle.render();
        expect(circleSVG).toContain('<polygon');
        expect(circleSVG).toContain('fill=');
    });

    test('Triangle should render correctly', () => {
        const triangleSVG = triangle.render();
        expect(triangleSVG).toContain('<circle');
        expect(triangleSVG).toContain('fill=');
    });
});

// const { Shape, Square, Circle, Triangle } = require('./cli.js'); // Update 'your-file-name.js' with the actual file name

// const square = new Square('Square', 'black', 'red');
// console.log(square.render());

// const circle = new Circle('Circle', 'white', 'blue');
// console.log(circle.render());

// const triangle = new Triangle('Triangle', 'yellow', 'green');
// console.log(triangle.render());