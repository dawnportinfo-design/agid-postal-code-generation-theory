import type { PostalZoneLowerBound, RegionDemandProfile } from './types.ts';

function positiveCeil(value: number): number {
  if (!Number.isFinite(value) || value <= 0) {
    return 0;
  }
  return Math.ceil(value);
}

export function calculateMinimumPostalZones(profile: RegionDemandProfile): PostalZoneLowerBound {
  const reasons = {
    addressableUnits: positiveCeil(profile.addressableUnits / profile.maxUnitsPerZone),
    population: positiveCeil(profile.population / profile.maxPopulationPerZone),
    parcelDemand: positiveCeil(profile.parcelDemandPerDay / profile.maxParcelDemandPerZone),
    area: positiveCeil(profile.areaKm2 / profile.maxAreaKm2PerZone),
    disconnectedComponents: Math.max(1, Math.ceil(profile.disconnectedComponents)),
  };

  return {
    minimumZones: Math.max(...Object.values(reasons)),
    reasons,
  };
}

