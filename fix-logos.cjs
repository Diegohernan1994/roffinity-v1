const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity v2/src/pages';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace remaining template img paths that were not in the _files directory
    content = content.replace(/img\/logos\/logo\.png/g, '/v2/images/logo.png');
    content = content.replace(/img\/logos\//g, '/v2/images/');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed img/logos/ paths.');

