const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity v2/src/pages';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Cloudflare scripts
    content = content.replace(/<script type="module" src="\/v2\/css\/v31edd.*?<\/script>/g, '');
    content = content.replace(/<script>\(function\(\)\{function c\(\)[\s\S]*?<\/iframe>/g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Cloudflare scripts removed.');

