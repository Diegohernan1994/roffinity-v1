const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/v2';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace hrefs
    // Typically Metary has href="index.html", href="about.html", href="services.html"
    content = content.replace(/href="[^"]*?index\.html"/g, 'href="/v2"');
    content = content.replace(/href="[^"]*?about\.html"/g, 'href="/v2/about"');
    content = content.replace(/href="[^"]*?services\.html"/g, 'href="/v2/services"');
    content = content.replace(/href="[^"]*?portfolio\.html"/g, 'href="/v2/gallery"');
    content = content.replace(/href="[^"]*?contact\.html"/g, 'href="/v2/contact"');
    
    // Also, logo links
    content = content.replace(/href="[^"]*?" class="navbar-brand"/g, 'href="/v2" class="navbar-brand"');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Navigation links updated.');
