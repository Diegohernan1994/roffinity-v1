const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'res-1.jpg': '1600596542815-ffad4c1539a9', // Roof Replacement (Modern house)
  'res-2.jpg': '1584622650111-993a426fbf0a', // Roof Repair (Workers)
  'res-3.jpg': '1512917774080-9991f1c4c750', // Asphalt Shingles (Modern suburban)
  'res-4.jpg': '1600585154340-be6161a56a0c', // Tile Roofing (Modern villa)
  'res-5.jpg': '1628624747186-a941c476b7ef', // Metal Roofing (Modern angled roof)
  'res-6.jpg': '1486406146926-c627a92ad1ab', // Corrugated Roofing (Modern metal)
  'res-7.jpg': '1508450859948-4e04fabaa4ea', // Cool Roofing (Modern solar/white roof)
  'res-8.jpg': '1600607687920-4e2a09cf159d', // Fiber Cement Roofing (Modern luxury)
  'res-9.jpg': '1600566753190-17f0baa2a6c3', // Slate Shingles (Modern dark roof)
  'res-10.jpg': '1513694203232-719a280e022f', // Wood Shingles (Modern cedar accents)
  'com-1.jpg': '1497366216548-37526070297c', // Commercial Metal Roofing
  'com-2.jpg': '1584464491033-06628f3a6b7b', // Roof Coatings
  'com-3.jpg': '1517581177682-a085bc7fcb10', // Acrylic Roof Coating
  'com-4.jpg': '1431540015161-0bf868a2d407', // PVC Roofing
  'com-5.jpg': '1503387762-592deb58ef4e', // EPDM Roofing
  'com-6.jpg': '1541888087817-4861614526d0'  // Liquid-Applied Roofing
};

const download = (filename, id) => {
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;
  const dest = path.join(__dirname, 'public', 'images', 'services', filename);
  
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (redirectRes) => {
          const file = fs.createWriteStream(dest);
          redirectRes.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        });
      } else {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function run() {
  for (const [filename, id] of Object.entries(images)) {
    console.log(`Downloading ${filename}...`);
    try {
      await download(filename, id);
    } catch (e) {
      console.error(`Failed ${filename}: ${e}`);
    }
  }
  console.log('All downloads finished.');
}
run();
