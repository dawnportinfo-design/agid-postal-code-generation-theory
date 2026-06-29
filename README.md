# AGID Postal Code Generation Theory

AGID Postal Code Generation Theory is a research and reference-code repository
for designing postal-code-like addressing systems for countries, territories,
islands, enclaves, virtual towns, disaster zones, dense cities, sparse rural
regions, and places where conventional postal codes are absent or insufficient.

The repository is intentionally a parent theory repository. The listed models
are tightly related and should first share one vocabulary, compatibility
matrix, and executable reference model before any country-specific or
algorithm-specific repository is split out.

## Core Claim

A postal code is not only a label. It is a bounded information channel between:

- administrative geography;
- delivery topology;
- population and parcel demand;
- address ambiguity;
- terrain and islands;
- future urban change;
- search complexity;
- human error tolerance;
- AGID / AddressGrid compatibility.

The goal is not to force every country into one fixed postal-code shape. The
goal is to define a family of compatible postal-zone models that can produce the
minimum safe number of zones, variable-length codes, and stable update rules for
different countries and operational purposes.

## Repository Relationship

```text
address-morphism-theory
  -> defines address referents, ambiguity, lineage, PID, and safe resolution

agid-postal-code-generation-theory
  -> defines postal-zone generation, numbering, optimization, and lifecycle

zk-address-predicates
  -> proves postal-equivalent membership without disclosing private address content

country / region repositories
  -> provide local administrative, road, population, and source-policy data

AddressGrid
  -> provides grid cells, fallback spatial buckets, and machine-readable handoff
```

## What Belongs Here

- Mathematical models for postal-zone generation.
- Compatibility rules between postal zones, AGID, AddressGrid, country packs,
  and Address Morphism Theory.
- Reference algorithms and test vectors.
- Safety boundaries for countries without postal codes or with weak postal
  systems.

## What Does Not Belong Here

- Private recipient address records.
- Private coordinates.
- Secret delivery manifests.
- Live commercial API keys.
- Country-scale GIS binaries or search indexes. Those belong in country data
  repositories or external storage with source policy.

## Quick Start

```bash
npm install
npm run verify
```

Verification is local-only and does not call external services.

## License

- Code and schemas: MIT.
- Papers and documentation: CC BY 4.0, see `LICENSE-PAPERS.md`.
