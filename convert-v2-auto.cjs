const fs = require('fs');
const path = require('path');

const demoDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/demo 2';
const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/v2';

const files = fs.readdirSync(demoDir).filter(f => f.endsWith('.html'));

files.forEach(src => {
    let dest = 'unknown.astro';
    if (src.toLowerCase().includes('about')) dest = 'about.astro';
    else if (src.toLowerCase().includes('contact')) dest = 'contact.astro';
    else if (src.toLowerCase().includes('gallery')) dest = 'gallery.astro';
    else if (src.toLowerCase().includes('services')) dest = 'services.astro';
    else if (src.toLowerCase().includes('proyecto')) dest = 'project.astro';
    else dest = 'index.astro';

    let srcPath = path.join(demoDir, src);
    let content = fs.readFileSync(srcPath, 'utf8');
    
    content = content.replace(/\.\/[^"]*?_files\//g, '/v2/css/');
    content = content.replace(/\/v2\/css\/(.*?\.(js|js\.descargar))/g, '/v2/js/$1');
    content = content.replace(/\.js\.descargar/g, '.js');
    content = content.replace(/\/v2\/css\/(.*?\.(jpg|png|svg|gif))/g, '/v2/images/$1');
    
    // Convert generic image tags to use V1 images where possible
    // (I will do this carefully via another script or manually in the Astro files to match perfectly)
    
    let astroContent = "---\n// Version 2 Page\n---\n" + content;
    fs.writeFileSync(path.join(destDir, dest), astroContent, 'utf8');
});

console.log('Astro files auto-generated successfully.');
