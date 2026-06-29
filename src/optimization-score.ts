export type PostalOptimizationInput = {
  normalizedDeliveryTime: number;
  normalizedDeliveryCost: number;
  normalizedAmbiguity: number;
  normalizedWorkloadImbalance: number;
  normalizedLifecycleInstability: number;
};

export type PostalOptimizationWeights = {
  deliveryTime: number;
  deliveryCost: number;
  ambiguity: number;
  workloadBalance: number;
  lifecycleStability: number;
};

export function scorePostalPartition(input: PostalOptimizationInput, weights: PostalOptimizationWeights): number {
  const weighted =
    input.normalizedDeliveryTime * weights.deliveryTime +
    input.normalizedDeliveryCost * weights.deliveryCost +
    input.normalizedAmbiguity * weights.ambiguity +
    input.normalizedWorkloadImbalance * weights.workloadBalance +
    input.normalizedLifecycleInstability * weights.lifecycleStability;

  const totalWeight =
    weights.deliveryTime +
    weights.deliveryCost +
    weights.ambiguity +
    weights.workloadBalance +
    weights.lifecycleStability;

  if (totalWeight <= 0) {
    throw new Error('at least one optimization weight is required');
  }

  return weighted / totalWeight;
}

