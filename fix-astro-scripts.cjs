const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/v2';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add is:inline to all scripts loaded from /v2/js/
    content = content.replace(/<script src="\/v2\/js\//g, '<script is:inline src="/v2/js/');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('is:inline added to scripts.');
