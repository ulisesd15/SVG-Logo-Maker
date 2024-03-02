


const createSVGImage = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'logo.svg');
    svg.setAttribute('width', '300');
    svg.setAttribute('height', '200');

    log('Generated logo.svg file' , svg)
    
}
