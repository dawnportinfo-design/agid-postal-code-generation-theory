# 4. Minimum Postal-Zone Count

Let a country or region contain addressable demand units \(U\). A postal-zone
partition \(P = \{Z_1, \ldots, Z_k\}\) is acceptable when every zone satisfies
operational and semantic constraints:

\[
\forall Z_i \in P:
  load(Z_i) \le L_{max},
  ambiguity(Z_i) \le A_{max},
  travel(Z_i) \le T_{max},
  capacity(Z_i) \le C_{max}
\]

The minimum postal-zone count problem is:

\[
\min |P| \quad \text{subject to safety, delivery, ambiguity, and capacity constraints.}
\]

This repository provides a conservative lower-bound function. It does not claim
to solve global optimal partitioning exactly.

