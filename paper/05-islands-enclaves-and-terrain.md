# 5. Islands, Enclaves, and Terrain

Postal zones should not assume Euclidean closeness means delivery closeness.
Islands, exclaves, mountain ranges, rivers, deserts, borders, and ferry routes
change the effective graph.

The correct abstraction is a delivery graph:

\[
G = (V, E, w)
\]

where vertices are settlements, facilities, ports, depots, or grid cells; edges
are roads, ferry routes, bridges, tunnels, trails, or approved handoff links;
and weights represent time, cost, capacity, or reliability.

