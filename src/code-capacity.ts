import type { CodeCapacity, PostalCodeSystemProfile } from './types.ts';

export function calculateCodeCapacity(profile: PostalCodeSystemProfile, requiredZones: number): CodeCapacity {
  const rawCapacity = profile.alphabetSize ** profile.codeLength;
  const reserved = Math.ceil(rawCapacity * profile.reservedFraction);
  const typoReserve = Math.max(0, profile.typoCheckSymbols) * profile.alphabetSize ** Math.max(0, profile.codeLength - 1);
  const usableCodes = Math.max(0, rawCapacity - reserved - typoReserve);

  return {
    usableCodes,
    supportsZones: usableCodes >= requiredZones,
    spareCapacity: usableCodes - requiredZones,
  };
}

export function minimumCodeLength(alphabetSize: number, requiredZones: number, reservedFraction = 0.1): number {
  if (alphabetSize < 2) {
    throw new Error('alphabetSize must be at least 2');
  }
  for (let length = 1; length <= 32; length += 1) {
    const usable = Math.floor(alphabetSize ** length * (1 - reservedFraction));
    if (usable >= requiredZones) {
      return length;
    }
  }
  throw new Error('requiredZones exceeds supported search range');
}

