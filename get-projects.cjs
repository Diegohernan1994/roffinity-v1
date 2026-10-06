const https = require('https');

https.get('https://roofinity.co/projects/', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const text = data.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                     .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                     .replace(/<[^>]+>/g, '\n')
                     .replace(/\n\s*\n/g, '\n')
                     .trim();
    console.log(text.substring(0, 3500));
  });
});

