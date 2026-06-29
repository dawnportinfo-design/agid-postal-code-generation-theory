# Adoption Readiness: AGID Postal Code Generation Theory

This note explains why postal-code generation belongs in a public research and
reference-code repository.

## Review Audience

- Public-good funders evaluating address inclusion.
- Postal, humanitarian, logistics, and civic technology reviewers.
- Researchers evaluating whether postal-equivalent zones can be generated
  safely for weak or absent postal-code systems.

## Core Public-Good Claim

Many places have no postal code, weak postal coverage, informal settlements,
islands, terrain barriers, or fast-changing cities. This repository studies how
to design postal-equivalent zones that balance administrative geography,
delivery topology, population density, demand, search complexity, and human
error tolerance.

## What Is Verifiable Today

- A taxonomy of postal generation models.
- Reference TypeScript model for zone constraints, optimization intent, and
  safety boundaries.
- Tests for model coverage and compatibility.
- Publication-safety scan and GitHub CI verification.
- Explicit relationship to AMT, AddressGrid, ZK predicates, and country
  repositories.

## What Is Deliberately Not Claimed

- Authority to create official postal systems.
- Complete country-scale deployment.
- Replacement of local postal operators.
- Universal best code length for every region.
- Full validation against live delivery networks.

## Strongest Grant Fit

- UNICEF Venture Fund: service access and delivery in regions with weak
  addressing.
- Internet Society Foundation: inclusive, reliable addressing as infrastructure.
- NLnet Foundation: open standards and FOSS public data tooling.
- Protocol Labs: verifiable source policies and region data provenance.

## Next Evidence to Add

1. A no-postal-code case study for an island or city-region.
2. A weak-postal-code redesign case study for an African or rural-region model.
3. A generated decision table that maps model families to region constraints.
4. A conformance fixture that can be reused by country repositories.

