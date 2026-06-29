export type PostalModelFamily =
  | 'core'
  | 'geography'
  | 'lifecycle'
  | 'weak-missing'
  | 'optimization'
  | 'integration'
  | 'delivery'
  | 'quality'
  | 'global'
  | 'governance';

export type RegionDemandProfile = {
  addressableUnits: number;
  population: number;
  parcelDemandPerDay: number;
  areaKm2: number;
  disconnectedComponents: number;
  maxUnitsPerZone: number;
  maxParcelDemandPerZone: number;
  maxPopulationPerZone: number;
  maxAreaKm2PerZone: number;
};

export type PostalZoneLowerBound = {
  minimumZones: number;
  reasons: Record<string, number>;
};

export type PostalCodeSystemProfile = {
  alphabetSize: number;
  codeLength: number;
  reservedFraction: number;
  typoCheckSymbols: number;
};

export type CodeCapacity = {
  usableCodes: number;
  supportsZones: boolean;
  spareCapacity: number;
};

export type PostalState =
  | 'strong_existing'
  | 'weak_existing'
  | 'missing'
  | 'transition'
  | 'disaster_repartition'
  | 'virtual_town_required';

export type GenerationPolicy = {
  postalState: PostalState;
  preferLegacyCompatibility: boolean;
  allowVirtualTown: boolean;
  allowVariableLength: boolean;
  requireAddressGridFallback: boolean;
};

export type GenerationMode =
  | 'keep_existing'
  | 'redesign_overlay'
  | 'generate_postal_equivalent'
  | 'virtual_town_overlay'
  | 'emergency_repartition';

