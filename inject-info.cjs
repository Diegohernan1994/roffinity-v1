const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity v2/src/pages';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace Company Names
    content = content.replace(/Metary/g, 'Roofinity');
    content = content.replace(/Power &amp; Automation Technologies/g, 'Roofing Solutions');
    
    // Replace Phone
    content = content.replace(/\+1 234 567 890/g, '951-300-3512');
    content = content.replace(/\+1 234 567 89 00/g, '951-300-3512');
    content = content.replace(/\+1 234 567 8900/g, '951-300-3512');
    content = content.replace(/\+1 \(234\) 567 890/g, '951-300-3512');
    content = content.replace(/\+1234567890/g, '9513003512');
    content = content.replace(/123 456 7890/g, '951-300-3512');
    
    // Replace Email
    content = content.replace(/info@example\.com/g, 'contact@roofinity.com');
    content = content.replace(/example@domain\.com/g, 'contact@roofinity.com');
    
    // Replace Address
    content = content.replace(/123 Street, New York, USA/gi, '11801 Pierce St, St. 200, Riverside, CA 92505');
    content = content.replace(/123 Street, New York/gi, 'Riverside, CA');
    content = content.replace(/123 W 1st Street, Suite 900, Los Angeles, CA 90012/g, '11801 Pierce St, St. 200, Riverside, CA 92505'); // Just in case
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Company info injected.');

