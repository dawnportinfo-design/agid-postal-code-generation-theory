# 3. Hierarchy and Compatibility

The postal theory sits below Address Morphism Theory and above country-specific
data packs.

```text
AMT referent and ambiguity model
  -> postal-zone partition model
  -> country or region source policy
  -> AGID / AddressGrid machine handoff
  -> optional ZK postal-equivalent predicate
```

## Parent and Child Repositories

- `address-morphism-theory` is the parent theory for address referents,
  ambiguity, lineage, and PID issuance.
- `agid-postal-code-generation-theory` is the postal partition and numbering
  theory.
- country repositories are children that instantiate local data and source
  policy.
- future algorithm-specific repositories may be split only when a model has
  enough code, data, tests, and independent maintainers.

## Compatibility Rules

1. Postal zones must not contradict AMT unresolved or ambiguous states.
2. A generated postal code must preserve a reversible relation to AGID or
   AddressGrid at the declared precision.
3. Country repositories may specialize models, but must not redefine the global
   meaning of postal-equivalent membership.
4. ZK predicates may prove membership in a postal-equivalent zone, while keeping
   private address content and precise private coordinates out of public
   signals.
