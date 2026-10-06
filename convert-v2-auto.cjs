const fs = require('fs');
const path = require('path');

const demoDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/demo 2';
const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity v2/src/pages';

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
    
    content = content.replace(/\.\/[^"]*?_files\//g, '/assets/');
    content = content.replace(/\.js\.descargar/g, '.js');
    
    // Extract only the body content
    let start = content.indexOf('<div class="main-wrapper">');
    let end = content.indexOf('</body>');
    if (start !== -1 && end !== -1) {
        content = content.substring(start, end);
    }
    
    let astroContent = "---\nimport Layout from '../layouts/Layout.astro';\n---\n<Layout>\n" + content + "\n</Layout>";
    fs.writeFileSync(path.join(destDir, dest), astroContent, 'utf8');
});

console.log('Astro files auto-generated successfully.');
