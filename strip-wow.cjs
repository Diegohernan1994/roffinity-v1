const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/v2';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the inline JS animation styles that hide elements
    content = content.replace(/style="visibility:\s*(hidden|visible);.*?"/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('WowJS inline styles stripped.');
