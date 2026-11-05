---
'@drivenets/design-system': patch
---

Fix `BREAKPOINT_LG` being `NaN` in 0.9.0 through 0.26.0, so responsive props such as `DsStack` `direction` now switch at the `lg` breakpoint.
