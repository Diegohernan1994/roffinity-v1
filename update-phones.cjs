const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.astro')) results.push(file);
        }
    });
    return results;
}

const allAstroFiles = walk('c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src');

for (const file of allAstroFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    if (content.includes('(800) 766-3464')) {
        content = content.replace(/\(800\) 766-3464/g, '(951) 300-3512');
        changed = true;
    }
    if (content.includes('tel:8007663464')) {
        content = content.replace(/tel:8007663464/g, 'tel:9513003512');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated: ' + file);
    }
}
console.log('Done replacing old phone numbers.');
