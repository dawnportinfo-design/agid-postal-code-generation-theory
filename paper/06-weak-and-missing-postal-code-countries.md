# 6. Weak and Missing Postal-Code Countries

For countries without postal codes, the theory creates postal-equivalent zones
instead of pretending a conventional postal code exists.

For countries with weak postal codes, the theory defines a redesign layer that
can coexist with the old system:

```text
legacy postal code
  + AGID zone
  + AddressGrid fallback
  + virtual town when needed
  + source-policy version
```

The output is a postal-equivalent identifier that can support delivery,
registry, search, and privacy proofs without requiring immediate legal
replacement of the national postal system.

