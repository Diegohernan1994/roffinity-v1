const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/v2';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace Services
    content = content.replace(/Mechanical Engineering/g, 'Residential Roofing');
    content = content.replace(/Agricultural Processing/g, 'Commercial Roofing');
    content = content.replace(/Oils And Lubricants/g, 'Roof Replacement');
    content = content.replace(/Power And Energy/g, 'Roof Repair');
    content = content.replace(/Chemical Research/g, 'Metal Roofing');
    content = content.replace(/Material Engineering/g, 'Roof Coatings');
    
    // Clean up generic dummy links to point to services
    content = content.replace(/href="#!"/g, 'href="/v2/services"');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Services injected.');
