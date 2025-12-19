const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/Golden/.gemini/antigravity/brain/cce5eaa1-8eab-43b5-9418-f3c9d54992a4';

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (path.extname(file) === '.png') {
        const buffer = Buffer.alloc(24);
        const fd = fs.openSync(path.join(dir, file), 'r');
        fs.readSync(fd, buffer, 0, 24, 0);
        fs.closeSync(fd);
        
        const width = buffer.readUInt32BE(16);
        const height = buffer.readUInt32BE(20);
        console.log(`${file}: ${width}x${height}`);
    }
  });
});
