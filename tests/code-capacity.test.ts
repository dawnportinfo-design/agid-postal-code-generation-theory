import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateCodeCapacity, minimumCodeLength } from '../src/code-capacity.ts';

test('code capacity accounts for reserved and typo-check space', () => {
  const capacity = calculateCodeCapacity({
    alphabetSize: 10,
    codeLength: 4,
    reservedFraction: 0.1,
    typoCheckSymbols: 1,
  }, 8000);

  assert.equal(capacity.usableCodes, 8000);
  assert.equal(capacity.supportsZones, true);
});

test('minimum code length supports variable-length expansion', () => {
  assert.equal(minimumCodeLength(10, 900), 3);
  assert.equal(minimumCodeLength(32, 100000), 4);
});

