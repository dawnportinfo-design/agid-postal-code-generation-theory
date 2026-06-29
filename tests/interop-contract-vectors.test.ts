import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { chooseGenerationMode } from '../src/index.ts';
import type { GenerationMode } from '../src/types.ts';

type ContractVector = {
  id: string;
  postal: {
    countryCode: string;
    zoneState: 'postal_equivalent';
    generationMode: GenerationMode;
  };
};

const contractFixturePath = '../agid-interoperability-contracts/fixtures/interop-vectors.json';
const localFixturePath = 'tests/fixtures/interop-vectors.json';
const fixturePath = fs.existsSync(contractFixturePath) ? contractFixturePath : localFixturePath;

const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8')) as {
  vectors: ContractVector[];
};

test('postal theory selects the shared no-postcode AGID postal-equivalent mode', () => {
  const vector = fixture.vectors.find((item) => item.id === 'no-postcode-agid-to-zk-demo');
  assert.ok(vector);
  assert.equal(vector.postal.countryCode, 'AE');
  assert.equal(vector.postal.zoneState, 'postal_equivalent');
  assert.equal(
    chooseGenerationMode({
      postalState: 'missing',
      preferLegacyCompatibility: false,
      allowVirtualTown: false,
      allowVariableLength: true,
      requireAddressGridFallback: true,
    }),
    vector.postal.generationMode,
  );
});
