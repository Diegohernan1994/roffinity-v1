const fs = require('fs');
const path = require('path');

const destDir = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/v2';
const files = fs.readdirSync(destDir).filter(f => f.endsWith('.astro'));

files.forEach(file => {
    let filePath = path.join(destDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all data-backgrounds and url("img/...") with mapped V2 images
    content = content.replace(/(data-background|url\(&quot;)[^"]*?slide-\d+\.jpg/g, '/v2/images/hero-bg.jpg');
    content = content.replace(/(data-background|url\(&quot;)[^"]*?bg-\d+\.jpg/g, '/v2/images/section-bg.jpg');
    
    // Also catch CSS url('img/bg/bg-03.jpg')
    content = content.replace(/url\(['"]?img\/bg\/[^'"\)]+['"]?\)/g, "url('/v2/images/section-bg.jpg')");
    content = content.replace(/url\(['"]?img\/banner\/[^'"\)]+['"]?\)/g, "url('/v2/images/hero-bg.jpg')");
    content = content.replace(/url\([^'"\)]+bg-\d+\.jpg\)/g, "url('/v2/images/section-bg.jpg')");
    content = content.replace(/url\([^'"\)]+slide-\d+\.jpg\)/g, "url('/v2/images/hero-bg.jpg')");
    
    // Also data-src
    content = content.replace(/data-src="img\/[^"]+"/g, 'data-src="/v2/images/portfolio-01.jpg"');
    
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Backgrounds injected.');
