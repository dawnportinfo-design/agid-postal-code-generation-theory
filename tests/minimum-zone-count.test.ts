import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateMinimumPostalZones } from '../src/minimum-zone-count.ts';

test('minimum postal zones use the strongest active lower bound', () => {
  const result = calculateMinimumPostalZones({
    addressableUnits: 12000,
    population: 45000,
    parcelDemandPerDay: 3000,
    areaKm2: 90,
    disconnectedComponents: 5,
    maxUnitsPerZone: 2000,
    maxPopulationPerZone: 20000,
    maxParcelDemandPerZone: 1000,
    maxAreaKm2PerZone: 50,
  });

  assert.equal(result.minimumZones, 6);
  assert.equal(result.reasons.addressableUnits, 6);
  assert.equal(result.reasons.disconnectedComponents, 5);
});

