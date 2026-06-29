# 8. AddressGrid and AMT Integration

AddressGrid provides spatial fallback buckets. AMT provides referent safety and
ambiguity handling. Postal generation combines both:

```text
AMT candidates
  -> safe referent or unresolved state
  -> AddressGrid cells and delivery graph
  -> postal-equivalent zone
  -> optional code assignment
```

If AMT is ambiguous, the postal generator must not create a false precision
code. It may emit a broader zone, a manual-review state, or a virtual-town
placeholder.

