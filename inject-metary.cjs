const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity v2/src/pages';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace Phone
    content = content.replace(/\+44 205-658-1823/g, '951-300-3512');
    content = content.replace(/\+44 205-658-1824/g, '951-300-3512');
    
    // Replace Address
    content = content.replace(/66 Guild Street 512B, Great North Town\./gi, '11801 Pierce St, St. 200, Riverside, CA 92505');
    content = content.replace(/66 Guild Street 512B/gi, '11801 Pierce St, St. 200');
    content = content.replace(/Great North Town/gi, 'Riverside, CA');
    
    // Other common Metary replacements
    content = content.replace(/info@yourdomain\.com/gi, 'contact@roofinity.com');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Metary specific info injected.');

