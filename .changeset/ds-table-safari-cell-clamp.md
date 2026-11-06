---
'@drivenets/design-system': patch
---

Fix `DsTable` cells showing an icon beside wrapping text being cut to one line in Safari; cells with their own block or flex layout no longer get the two-line clamp, but text, spans and links still do.
