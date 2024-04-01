class Shape {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }

    render() {
        // Implement this method in the child classes
    }
}

class Square extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 200">
                    <rect fill="${this.color}" x="70" y="20" width="160" height="160"/>
                    <text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.shapeColor}">${this.text}</text>
                </svg>`;
    }
}

class Circle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 200">
                    <polygon fill="${this.color}" points="150, 0 250, 170 50, 170" />
                    <text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.shapeColor}">${this.text}</text>
                </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 200">
                    <circle cx="150" cy="100" r="80" fill="${this.color}" />
                    <text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.shapeColor}">${this.text}</text>
                </svg>`;
    }
}

// Usage example
const text = "SVG";
const shape = "square"; // or "circle" or "triangle"
const color = "white";
const shapeColor = "red";

let shapeObj;
switch (shape) {
    case "square":
        shapeObj = new Square(text, color, shapeColor);
        break;
    case "circle":
        shapeObj = new Circle(text, color, shapeColor);
        break;
    case "triangle":
        shapeObj = new Triangle(text, color, shapeColor);
        break;
}

const svgLogo = shapeObj.render();
console.log(svgLogo);