class Shape {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error('render method must be implemented');
    }
}

class Square extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 200">
                    <rect fill="${this.shapeColor}" x="70" y="20" width="160" height="160"/>
                    <text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.color}">${this.text}</text>
                </svg>`;
    }
}

class Circle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 200">
                    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                    <text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.color}">${this.text}</text>
                </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300 200">
                    <polygon fill="${this.shapeColor}" points="150, 0 250, 170 50, 170" />
                    <text x="150" y="115" font-size="45" text-anchor="middle" fill="${this.color}">${this.text}</text>
                </svg>`;
    }
}

module.exports = { Shape, Square, Circle, Triangle };