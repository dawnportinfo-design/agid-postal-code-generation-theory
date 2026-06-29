const fs = require('node:fs');
const path = require('node:path');

const forbidden = [
  /raw\s*address/i,
  /recipient\s*(name|record|phone|email)/i,
  /private\s*key/i,
  /witness\s*(secret|data|material)/i,
  /proof\s*secret/i,
];

const allowedFiles = new Set(['README.md', 'paper/09-limitations.md']);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') {
        return [];
      }
      return walk(full);
    }
    return [full];
  });
}

let scanned = 0;
for (const file of walk('.')) {
  if (!/\.(md|ts|json|cjs)$/.test(file)) {
    continue;
  }
  const normalized = file.replace(/\\/g, '/').replace(/^\.\//, '');
  const text = fs.readFileSync(file, 'utf8');
  scanned += 1;
  if (allowedFiles.has(normalized)) {
    continue;
  }
  for (const pattern of forbidden) {
    if (pattern.test(text)) {
      throw new Error(`Publication safety pattern ${pattern} found in ${normalized}`);
    }
  }
}

console.log(`Publication safety scan passed for ${scanned} text file(s).`);

