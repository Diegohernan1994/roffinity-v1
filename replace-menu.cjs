const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/v2';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

const newMenu = '<!-- start menu area -->\n<ul class="navbar-nav ms-auto" id="nav">\n<li><a href="/v2">Home</a></li>\n<li><a href="/v2/about">About</a></li>\n<li><a href="/v2/services">Services</a></li>\n<li><a href="/v2/gallery">Gallery</a></li>\n<li><a href="/v2/contact">Contact</a></li>\n</ul>\n<!-- end menu area -->';

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/<!-- start menu area -->[\s\S]*?<!-- end menu area -->/, newMenu);
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Menus replaced.');
