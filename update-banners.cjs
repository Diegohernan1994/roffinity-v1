const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/services';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.astro'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Using a regex to match the first word(s) and the last word
    content = content.replace(/<h1 style="color: #fff; font-weight: 800; text-transform: uppercase; margin-bottom: 15px; font-size: 42px; letter-spacing: 1px;">(.*) (\w+)<\/h1>/g, '<h1 class="section-heading" style="color: #fff !important;">$1 <span>$2</span></h1>');

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Updated all service pages');

