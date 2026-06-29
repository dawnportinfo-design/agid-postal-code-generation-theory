import assert from 'node:assert/strict';
import test from 'node:test';
import { chooseGenerationMode } from '../src/generation-policy.ts';

test('missing postal-code countries generate postal-equivalent overlays', () => {
  assert.equal(chooseGenerationMode({
    postalState: 'missing',
    preferLegacyCompatibility: false,
    allowVirtualTown: true,
    allowVariableLength: true,
    requireAddressGridFallback: true,
  }), 'generate_postal_equivalent');
});

test('weak postal-code countries use redesign overlays', () => {
  assert.equal(chooseGenerationMode({
    postalState: 'weak_existing',
    preferLegacyCompatibility: true,
    allowVirtualTown: true,
    allowVariableLength: true,
    requireAddressGridFallback: true,
  }), 'redesign_overlay');
});

test('disaster states force emergency repartition', () => {
  assert.equal(chooseGenerationMode({
    postalState: 'disaster_repartition',
    preferLegacyCompatibility: true,
    allowVirtualTown: true,
    allowVariableLength: false,
    requireAddressGridFallback: true,
  }), 'emergency_repartition');
});

