const https = require('https');

https.get('https://roofinity.co/contact/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    // Basic regex to strip HTML and extract visible text
    const text = data.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                     .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                     .replace(/<[^>]+>/g, '\n')
                     .replace(/\n\s*\n/g, '\n')
                     .trim();
    console.log(text.substring(0, 2500));
  });
});

