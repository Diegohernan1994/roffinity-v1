const fs = require('fs');
const path = require('path');

const demoDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/demo 2';
const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/v2';

const files = [
    { src: 'Metary - Industry & Factory HTML Template _ Power & Automation Technologies.html', dest: 'index.astro' },
    { src: 'about us Metary - Industry & Factory HTML Template _ Power & Automation Technologies.html', dest: 'about.astro' },
    { src: 'GALLERY Metary - Industry & Factory HTML Template _ Power & Automation Technologies.html', dest: 'gallery.astro' },
    { src: 'Page services Metary - Industry & Factory HTML Template _ Power & Automation Technologies.html', dest: 'services.astro' },
    { src: 'PAGINA DE PROYECTO Metary - Industry & Factory HTML Template _ Power & Automation Technologies.html', dest: 'project.astro' },
    { src: 'CONTACT US Metary - Industry & Factory HTML Template _ Power & Automation Technologies.html', dest: 'contact.astro' }
];

files.forEach(f => {
    let srcPath = path.join(demoDir, f.src);
    if (!fs.existsSync(srcPath)) {
        console.log('Skipping ' + f.src + ' (not found)');
        return;
    }
    
    let content = fs.readFileSync(srcPath, 'utf8');
    
    content = content.replace(/\.\/[^"]*?_files\//g, '/v2/css/');
    
    content = content.replace(/\/v2\/css\/(.*?\.(js|js\.descargar))/g, '/v2/js/$1');
    content = content.replace(/\.js\.descargar/g, '.js');
    
    content = content.replace(/\/v2\/css\/(.*?\.(jpg|png|svg|gif))/g, '/v2/images/$1');
    
    let astroContent = "---\n// Version 2 Page\n---\n" + content;

    fs.writeFileSync(path.join(destDir, f.dest), astroContent, 'utf8');
});

console.log('Astro files created successfully.');
