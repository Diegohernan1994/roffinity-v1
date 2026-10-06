const fs = require('fs');

let file1 = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/components/GoogleMap.astro';
let content1 = fs.readFileSync(file1, 'utf8');
content1 = content1.replace(/777 Commercial Blvd, Los Angeles, CA 90015/g, '11801 Pierce St, St. 200, Riverside, CA 92505');
// Let's also update the iframe URL in GoogleMap.astro to point to Riverside if it's the old LA map
content1 = content1.replace(/https:\/\/www\.google\.com\/maps\/embed\?[^"]+/, 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.28929947844!2d-117.49129532430035!3d33.907936173211516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcc1df06e9f1a3%3A0x6b2dc1e6a18d18d4!2s11801%20Pierce%20St%20%23200%2C%20Riverside%2C%20CA%2092505!5e0!3m2!1sen!2sus!4v1714571987541!5m2!1sen!2sus');
fs.writeFileSync(file1, content1, 'utf8');

let file2 = 'c:/Users/Diego/Downloads/Agente Ayrton/Agente Roofinity/src/pages/thank-you.astro';
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(/777 Commercial Blvd, Los Angeles, CA 90015/g, '11801 Pierce St, St. 200, Riverside, CA 92505');
fs.writeFileSync(file2, content2, 'utf8');

console.log('Updated GoogleMap and thank-you');

