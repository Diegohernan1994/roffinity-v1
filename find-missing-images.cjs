const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity v2/src/pages';
const imgDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/public/v2/images';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

let missing = new Set();

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find all /v2/images/ references
    let regex = /\/v2\/images\/([^"'\s\)]+)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        let imgName = match[1];
        let imgPath = path.join(imgDir, imgName);
        if (!fs.existsSync(imgPath)) {
            missing.add(imgName);
        }
    }
});

console.log('Missing images:');
missing.forEach(m => console.log(m));

