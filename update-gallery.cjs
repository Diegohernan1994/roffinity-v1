const fs = require('fs');

const file = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/components/PhotoGallery.astro';
let content = fs.readFileSync(file, 'utf8');

const updates = [
    { img: 'res-asphalt-shingles.jpg', url: '/projects/residential-shingle-roof', name: 'Residential Shingle Roof' },
    { img: 'res-tile-roofing.jpg', url: '/projects/shingle-roof-finished-views', name: 'Shingle Roof Finished Views' },
    { img: 'res-metal-roofing.jpg', url: '/projects/roof-preparation-aerial', name: 'Roof Preparation Aerial' },
    { img: 'com-pvc-roofing.jpg', url: '/projects/dormer-roof-progress', name: 'Dormer Roof Progress' },
    { img: 'com-liquid-applied.jpg', url: '/projects/roofing-work-property', name: 'Roofing Work Property Views' },
    { img: 'res-slate-shingles.jpg', url: '/projects/low-slope-surface', name: 'Low-Slope Surface View' },
    { img: 'res-corrugated-roofing.jpg', url: '/projects/residential-property-views', name: 'Residential Property Views' },
    { img: 'com-epdm-roofing.jpg', url: '/projects/shingle-roof-geometry', name: 'Shingle Roof Geometry' },
    { img: 'com-roof-coatings.jpg', url: '/projects/roof-details-closer-look', name: 'Roof Details Closer Look' }
];

updates.forEach(u => {
    const regex = new RegExp('<figcaption>[\\s\\S]*?<a href="[^"]*' + u.img + '" class="preview-btn"[^>]*>.*?</a>[\\s\\S]*?<a href="#" data-toggle="modal"[^>]*><h3>.*?</h3></a>[\\s\\S]*?</div>[\\s\\S]*?</figcaption>', 'g');
    const replacement = '<figcaption>\n                  <div>\n                    <a href="' + u.url + '" title="' + u.name + '"><i class="fa fa-link"></i></a>\n                    <a href="' + u.url + '"><h3>' + u.name + '</h3></a>\n                  </div>\n                </figcaption>';
    content = content.replace(regex, replacement);
});

fs.writeFileSync(file, content, 'utf8');
console.log('PhotoGallery updated.');
