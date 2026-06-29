const fs = require('node:fs');

const taxonomy = JSON.parse(fs.readFileSync('specs/model-taxonomy.json', 'utf8'));
const ids = new Set();

if (taxonomy.schemaVersion !== 'postal-model-taxonomy-v0.1') {
  throw new Error('Unexpected taxonomy schema version.');
}

if (!Array.isArray(taxonomy.models) || taxonomy.models.length < 39) {
  throw new Error('Taxonomy must include all requested model families.');
}

for (const model of taxonomy.models) {
  if (!model.id || !model.family || !model.title) {
    throw new Error(`Incomplete model entry: ${JSON.stringify(model)}`);
  }
  if (ids.has(model.id)) {
    throw new Error(`Duplicate model id: ${model.id}`);
  }
  ids.add(model.id);
}

console.log(`Verified ${taxonomy.models.length} postal-code generation model(s).`);

