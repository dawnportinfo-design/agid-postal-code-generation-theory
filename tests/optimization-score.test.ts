import assert from 'node:assert/strict';
import test from 'node:test';
import { scorePostalPartition } from '../src/optimization-score.ts';

test('optimization score combines operational and semantic risk', () => {
  const score = scorePostalPartition({
    normalizedDeliveryTime: 0.2,
    normalizedDeliveryCost: 0.3,
    normalizedAmbiguity: 0.8,
    normalizedWorkloadImbalance: 0.4,
    normalizedLifecycleInstability: 0.1,
  }, {
    deliveryTime: 2,
    deliveryCost: 1,
    ambiguity: 3,
    workloadBalance: 1,
    lifecycleStability: 1,
  });

  assert.equal(Number(score.toFixed(3)), 0.45);
});

