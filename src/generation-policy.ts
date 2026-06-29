import type { GenerationMode, GenerationPolicy } from './types.ts';

export function chooseGenerationMode(policy: GenerationPolicy): GenerationMode {
  if (policy.postalState === 'disaster_repartition') {
    return 'emergency_repartition';
  }

  if (policy.postalState === 'strong_existing' && policy.preferLegacyCompatibility) {
    return 'keep_existing';
  }

  if (policy.postalState === 'weak_existing') {
    return 'redesign_overlay';
  }

  if (policy.postalState === 'virtual_town_required' && policy.allowVirtualTown) {
    return 'virtual_town_overlay';
  }

  if (policy.postalState === 'missing' && policy.requireAddressGridFallback) {
    return 'generate_postal_equivalent';
  }

  return 'redesign_overlay';
}

